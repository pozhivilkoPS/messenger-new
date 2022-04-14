package com.company.messenger.client.gateway.contoller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 */
@Controller
public class DocsController {

    @RequestMapping("/docs")
    String getDocs() {
        return "index.html";
    }

}
