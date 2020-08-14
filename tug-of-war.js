input.onButtonPressed(Button.A, function () {
    total += 1
})
input.onButtonPressed(Button.B, function () {
    total += -1
})
let total = 13
basic.forever(function () {
    led.plotBarGraph(
    total,
    25
    )
    if (total == 0) {
        basic.showString("A wins!")
    } else if (total == 25) {
        basic.showString("B wins!")
    }
})