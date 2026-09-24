// package com.afzal.aichatbot.controller;

// import com.afzal.aichatbot.service.ChatService;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api")
// @CrossOrigin(origins = "http://localhost:5173")
// public class ChatController {

//     private final ChatService chatService;

//     public ChatController(ChatService chatService) {
//         this.chatService = chatService;
//     }

//     @PostMapping("/chat")
//     public String chat(@RequestBody String message) {

//         System.out.println("User message: " + message);

//         return chatService.getResponse(message);
//     }
// }



// working code 

// package com.afzal.aichatbot.controller;

// import com.afzal.aichatbot.service.ChatService;
// import com.google.genai.ResponseStream;
// import com.google.genai.types.GenerateContentResponse;

// import org.springframework.web.bind.annotation.*;
// import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

// @RestController
// @RequestMapping("/api")
// @CrossOrigin(origins = "http://localhost:5173")
// public class ChatController {

//     private final ChatService chatService;

//     public ChatController(ChatService chatService) {
//         this.chatService = chatService;
//     }

//     @PostMapping("/chat")
//     public SseEmitter chat(@RequestBody String message) {

//         System.out.println("User message: " + message);

//         SseEmitter emitter = new SseEmitter(120000L);

//         new Thread(() -> {

//             try (ResponseStream<GenerateContentResponse> stream =
//                          chatService.getResponseStream(message)) {

//                 for (GenerateContentResponse chunk : stream) {

//                     String text = chunk.text();

//                     if (text != null && !text.isEmpty()) {
//                         emitter.send(
//                                 SseEmitter.event()
//                                         .data(text)
//                         );
//                     }
//                 }

//                 emitter.complete();

//             } catch (Exception e) {

//                 e.printStackTrace();
//                 emitter.completeWithError(e);
//             }

//         }).start();

//         return emitter;
//     }
// }


// new api code 


package com.afzal.aichatbot.controller;

import com.afzal.aichatbot.service.ChatService;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping("/chat")
    public SseEmitter chat(@RequestBody String message) {

        System.out.println("User message: " + message);

        SseEmitter emitter = new SseEmitter(120000L);

        new Thread(() -> {

            try {

                String response = chatService.getResponse(message);

                emitter.send(
                        SseEmitter.event()
                                .data(response)
                );

                emitter.complete();

            } catch (Exception e) {

                e.printStackTrace();
                emitter.completeWithError(e);
            }

        }).start();

        return emitter;
    }
}