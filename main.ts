basic.forever(function () {
    serial.writeValue("light", input.lightLevel())
    basic.pause(200)
})
