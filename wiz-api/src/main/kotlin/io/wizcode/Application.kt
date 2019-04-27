package io.wizcode

import io.micronaut.runtime.Micronaut

object Application {

    @JvmStatic
    fun main(args: Array<String>) {
        Micronaut.build()
                .packages("org.wizcode")
                .mainClass(Application.javaClass)
                .start()
    }
}