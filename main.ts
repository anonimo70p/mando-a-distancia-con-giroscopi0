radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        MotoresEnMarcha += 1
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    if (receivedNumber == 2) {
        MotoresEnMarcha += 0
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        MotoresEnMarcha += 1
    }
    if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        MotoresEnMarcha += 1
    }
})
radio.setGroup(167)
let MotoresEnMarcha = 0
basic.forever(function () {
    basic.showNumber(input.rotation(Rotation.Roll))
    if (MotoresEnMarcha == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
