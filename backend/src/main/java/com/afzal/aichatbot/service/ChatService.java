// package com.afzal.aichatbot.service;

// import org.springframework.stereotype.Service;

// import com.openai.client.OpenAIClient;
// import com.openai.client.okhttp.OpenAIOkHttpClient;
// import com.openai.models.ChatModel;
// import com.openai.models.responses.ResponseCreateParams;
// @Service
// public class ChatService {

//     private final OpenAIClient client;

//     public ChatService() {
//         this.client = OpenAIOkHttpClient.fromEnv();
//     }

//     public String getResponse(String message) {

//         ResponseCreateParams params = ResponseCreateParams.builder()
//                 .input(message)
//                 .model(ChatModel.GPT_5_2)
//                 .build();

//         return client.responses()
//                 .create(params)
//                 .output()
//                 .stream()
//                 .flatMap(item -> item.message().stream())
//                 .flatMap(msg -> msg.content().stream())
//                 .flatMap(content -> content.outputText().stream())
//                 .map(outputText -> outputText.text())
//                 .findFirst()
//                 .orElse("Sorry, I could not generate a response.");
//     }
// }



// package com.afzal.aichatbot.service;

// import org.springframework.stereotype.Service;

// import com.google.genai.Client;
// import com.google.genai.types.GenerateContentResponse;

// @Service
// public class ChatService {

//     private final Client client;

//     public ChatService() {
//         this.client = new Client();
//     }

//     public String getResponse(String message) {

//         GenerateContentResponse response =
//                 client.models.generateContent(
//                         "gemini-3.8-flash",
//                         message,
//                         null
//                 );

//         return response.text();
//     }
// }




// working code//

// package com.afzal.aichatbot.service;

// import org.springframework.stereotype.Service;

// import com.google.genai.Client;
// import com.google.genai.ResponseStream;
// import com.google.genai.types.GenerateContentResponse;

// @Service
// public class ChatService {

//     private final Client client;

//     public ChatService() {
//         this.client = new Client();
//     }

//     public ResponseStream<GenerateContentResponse> getResponseStream(String message) {

//         return client.models.generateContentStream(
//                 "gemini-3.8-flash",
//                 message,
//                 null
//         );
//     }
// }


// new api code 

package com.afzal.aichatbot.service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

    private final HttpClient httpClient = HttpClient.newHttpClient();

    private final String apiKey = System.getenv("OPENROUTER_API_KEY");

    public String getResponse(String message) throws Exception {

        JSONObject body = new JSONObject();

        body.put("model", "openrouter/free");

        body.put("messages", new org.json.JSONArray()
                .put(new JSONObject()
                        .put("role", "user")
                        .put("content", message)));

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://openrouter.ai/api/v1/chat/completions"))
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(body.toString()))
                .build();

        HttpResponse<String> response =
                httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        JSONObject json = new JSONObject(response.body());

        if (response.statusCode() >= 400) {
            throw new RuntimeException(
                    "OpenRouter Error: " + response.body()
            );
        }

        return json
                .getJSONArray("choices")
                .getJSONObject(0)
                .getJSONObject("message")
                .getString("content");
    }
}