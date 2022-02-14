input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
    basic.pause(1000)
    servos.P0.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(90)
    basic.pause(1000)
    servos.P1.setAngle(0)
})
basic.forever(function () {
	
})
