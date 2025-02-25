// This big block of code sends the tools makes the teams and defines the matches 
radio.onReceivedNumber(function (receivedNumber) {
    serialNumber = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    match = tool == receivedNumber
    player_index = players.indexOf(serialNumber)
    found = player_index >= 0
    if (match && !(found)) {
        players.push(serialNumber)
    }
    if (!(match) && found) {
        temp = players.removeAt(player_index)
    }
})
// Array for players and picking random tools e.g. (1 = Rock)
input.onGesture(Gesture.Shake, function () {
    players = [0]
    tool = randint(0, 2)
})
// Makes the players in an array
// which spreads them into teams, makes the radio group 10 so anyone can join and says to transmit the serial number that they have got 
let temp = 0
let found = false
let player_index = 0
let tool = 0
let match = false
let serialNumber = 0
let players: number[] = []
players = [0]
radio.setGroup(10)
radio.setTransmitSerialNumber(true)
// Random tool picker that shows what tool has been used also it sends its tool on the radio network to see who won
basic.forever(function () {
    radio.sendNumber(tool)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.showNumber(players.length)
})
