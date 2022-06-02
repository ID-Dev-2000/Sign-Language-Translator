// Establish default DOM elements
let receivedUserText = document.getElementById('userInputText')
let userInputButton = document.getElementById('userInputButton')
let aSLImageDiv = document.getElementById('displayASLImages')
let userResetButton = document.getElementById('userResetButton')

// On-click Event Listener
userInputButton.addEventListener("click", arrayToImage)
userResetButton.addEventListener("click", clearAll)

// On-enterpress Event Listener
receivedUserText.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        arrayToImage()
    }
})

// Clears input field and displayed translation
function clearAll() {
    receivedUserText.value = ''
    aSLImageDiv.innerHTML = ''
}

// Use regex to generate clean string, then split string to array
function stringToArray() {
    let userTextValue = receivedUserText.value
    let cleanString = /[^a-zA-Z ]/g
    userTextValue = userTextValue.replace(cleanString,'') // removes all non alphabetic characters
    return userTextValue.split('')
}

// Takes array conversion, assigns each letter to image, displays image in DOM
function arrayToImage() {
    let arrayOfUserData = stringToArray()
    aSLImageDiv.innerHTML = ''
    receivedUserText.value = ''

    // Converts array to string, regex to handle space, set back to array
    // Handles spaces in output sentence
    for (i=0; i<arrayOfUserData.length; i++) {
            stringOfUserData = arrayOfUserData.toString()
            cleanStringOfUserDataWithCommas = stringOfUserData.replace(/[\s]/g, '1')
            cleanStringOfUserDataFinal = cleanStringOfUserDataWithCommas.replace(/,/g, '')
            cleanArrayOfUserData = cleanStringOfUserDataFinal.split('')
    }
        for (let [key, value] of Object.entries(cleanArrayOfUserData)) {
            let stringArrayData = `IMAGES/ASL-${value.toUpperCase()}.PNG`
            let imageFromArrayData = document.createElement('img')
            imageFromArrayData.src = stringArrayData
            aSLImageDiv.appendChild(imageFromArrayData)
    }
}
