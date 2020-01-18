
        function getPassLength(){
            var passLength;
            var lengthEntered = false; //tracks whether length has been successfully entered.
            //take length input and validate it
            while(lengthEntered == false){
                passLength = prompt("How long should the password be? (please enter a number between 8 and 128)");
                passLength = parseInt(passLength);
                if ( Number.isNaN(passLength) ){ //if a number wasn't entered
                    alert("That is not a number. Please try again.");
                }
                else if (passLength < 8 || passLength > 128){ //if length is not in the specified range
                    alert("That number is not between 8 and 128. Please try again.");
                }
                else{ //successful entry
                    lengthEntered = true;
                    return passLength;
                }
            }
        }

        function selectCharacters(){
            //prompt user to select character types from:
            //- Special characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
            //- Numeric characters 0-9
            //- Lowercase characters a-z
            //- Uppercase Characters A-Z

            var selectionString = ""; //will be built to hold all valid characters

            var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //will be combined into selectionString based on what the user selected
            var numericCharacters = "0123456789";
            var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
            var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var charTypesEntered = false; //tracks whether character types have been successfully entered.
            while (charTypesEntered == false){
                var s_selected = false;
                var n_selected = false;
                var l_selected = false;
                var u_selected = false;

                var charSelection = prompt(
                    "Select character types to use in the password.\n" +
                    "To select one, type the letter in the parentheses\n" +
                    "For multiple, type the letters in any order (\"snl\", \"uns\", etc): \n" +
                    "(s)pecial characters\n" +
                    "(n)umeric characters\n" +
                    "(l)owercase characters\n" +
                    "(u)ppercase characters"
                );

                if (charSelection.length > 4){
                    alert("Input is too long. Please limit your selection to 4 or fewer characters.");
                }
                else if (charSelection.length == 0){
                    alert("You didn't enter anything. Please select at least one character type.")
                }
                else{
                    for (var i = 0; i < charSelection.length; i++){
                        if (charSelection[i].toLowerCase() == "s" && s_selected == false){
                            selectionString = selectionString + specialCharacters;
                            s_selected = true;
                        }
                        else if (charSelection[i].toLowerCase() == "n" && n_selected == false){
                            selectionString = selectionString + numericCharacters;
                            n_selected = true;
                        }
                        else if (charSelection[i].toLowerCase() == "l" && l_selected == false){
                            selectionString = selectionString + lowercaseCharacters;
                            l_selected = true;
                        }
                        else if (charSelection[i].toLowerCase() == "u" && u_selected == false){
                            selectionString = selectionString + uppercaseCharacters;
                            u_selected = true;
                        }
                    }
                }

                if (s_selected || n_selected || l_selected || u_selected){ //if at least one character type was selected, we're done.
                    charTypesEntered = true;
                    return selectionString;
                }
                else{
                    alert("Please select at least one character type.");
                }
            }
        }

        function generatePassword(passLength, selectionString){

            //generate password
            var passwordOutput = "";
            var selectionStringLength = selectionString.length;

            for (var i = 0; i < passLength; i++){
                var passwordCharIndex = Math.floor(Math.random() * selectionStringLength);
                passwordOutput = passwordOutput + selectionString[passwordCharIndex];
            }

            alert(
                "here is your new password: \n" + 
                "\"" + passwordOutput + "\""
            );
        }

        var passLength = getPassLength();
        var selectionString = selectCharacters();

        generatePassword(passLength, selectionString);