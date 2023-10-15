let neigung = 0
basic.forever(function () {
    neigung = input.rotation(Rotation.Pitch)
    basic.showNumber(neigung)
    if (Math.abs(neigung) > 10) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.setLedColor(0xff0000)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.setLedColor(0x00ff00)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
