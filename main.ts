input.onButtonPressed(Button.A, function () {
    X += 10
    while (X > 250) {
        X = 150
    }
    basic.showNumber(X / 10 - 15)
})
input.onButtonPressed(Button.AB, function () {
    if (ON == 0) {
        ON = 1
    } else {
        ON = 0
    }
})
input.onButtonPressed(Button.B, function () {
    Y += 10
    while (Y > 250) {
        Y = 150
    }
    basic.showNumber(Y / 10 - 15)
})
let X = 0
let Y = 0
let ON = 0
ON = 1
Y = 150
X = 150
basic.forever(function () {
    if (ON) {
        sensors.DDMmotor(
        AnalogPin.P1,
        1,
        AnalogPin.P8,
        0
        )
        sensors.DDMmotor(
        AnalogPin.P15,
        1,
        AnalogPin.P16,
        0
        )
    } else {
        sensors.DDMmotor(
        AnalogPin.P1,
        0,
        AnalogPin.P8,
        X
        )
        sensors.DDMmotor(
        AnalogPin.P15,
        1,
        AnalogPin.P16,
        Y
        )
    }
})
