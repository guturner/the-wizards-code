package io.wizcode.controllers

import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get

@Controller("/api/v1")
class HelloController {

    @Get("greetings/{name}")
    fun sayHello(name: String): String {
        return "Hello, $name!"
    }
}