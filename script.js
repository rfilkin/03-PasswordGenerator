
        var form_length = document.querySelector("#form_passLength");
        var special_toggle = document.querySelector("#special_toggle");
        var numeric_toggle = document.querySelector("#numeric_toggle");
        var lowercase_toggle = document.querySelector("#lowercase_toggle");
        var uppercase_toggle = document.querySelector("#uppercase_toggle");
        var gen_button = document.querySelector("#generate_button");
        var copy_button = document.querySelector("#copy_button");
        var pass_textbox = document.getElementById("pass_textbox");

        function validate_inputs(){
            var result = true;
            //returns a boolean descibing whether the inputs are valid (true = all valid, false = 1 or more invalid)
            var converted_length = parseInt(form_length.value);
            if (Number.isNaN(converted_length) ){ //if length is not a number
                alert("Length entered was not a number. Please try again.");
                result = false;
            }
            else if (converted_length < 8 || converted_length > 128){ //if length is out of range
                alert("Length entered was not between 8 and 128. Please try again.");
                result = false;
            }

            if ((special_toggle.checked || numeric_toggle.checked || lowercase_toggle.checked || uppercase_toggle.checked) == false){ //if no character types were selected
                alert("Please select at least one character type.");
                result = false;
            }

            return result;
        }

        function selectCharacters(special_t, numeric_t, lowercase_t, uppercase_t){
            var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //will be combined into selectionString based on what the user selected
            var numericCharacters = "0123456789";
            var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
            var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var selectionString = "";

            if (special_t){
                selectionString = selectionString + specialCharacters;
            }
            if (numeric_t){
                selectionString = selectionString + numericCharacters;
            }
            if (lowercase_t){
                selectionString = selectionString + lowercaseCharacters;
            }
            if (uppercase_t){
                selectionString = selectionString + uppercaseCharacters;
            }

            return selectionString;
        }

        function generatePassword(passLength, selectionString){
            //generate password

            if (validate_inputs()){ //check that inputs are valid before continuing

                var selectionString = selectCharacters(special_toggle.checked, numeric_toggle.checked, lowercase_toggle.checked, uppercase_toggle.checked);
                var selectionStringLength = selectionString.length;

                var passLength = form_length.value;

                var passwordOutput = "";
    
                for (var i = 0; i < passLength; i++){
                    var passwordCharIndex = Math.floor(Math.random() * selectionStringLength);
                    passwordOutput = passwordOutput + selectionString[passwordCharIndex];
                }

                pass_textbox.placeholder = passwordOutput;
            }

        }

        function copyText(){ 
            // create an invisible element to copy the readonly's placeholder text (the password), so we can copy it
            var pass_holder = document.createElement("textarea");
            pass_holder.style.height = 0;
            pass_holder.style.width  = 0;
            pass_holder.value = pass_textbox.placeholder;
            document.body.appendChild(pass_holder); //add element into the page

            pass_holder.select();
            pass_holder.setSelectionRange(0, 99999); /*For mobile devices*/

            /* Copy the text inside the text field */
            document.execCommand("copy");

            /* Alert the copied text */
            alert("Copied the text: " + pass_holder.value);
        }

        gen_button.addEventListener("click", generatePassword);
        copy_button.addEventListener("click", copyText);

        //todo:
        //- make things look pretty
        
