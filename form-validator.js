var error = [];
export function formInit(form_id) {
    var form_element = document.getElementById(`${form_id}`);
    // console.log(form_element)
    if (form_element) {
        form_element.addEventListener("change", function (e) {

            // console.log("Form has changed", e.target);
            var find_index = error.findIndex(x => x.id === e.target.id)
            if (find_index > -1) {
                error.splice(find_index, 1)
            }
            if (form_element.required) {
                requiredValidation(e.target);
            } else {
                notRequiredValidation(e.target);
            }
        });
    }
}

export function validation(form_id) {
    error = [];
    var form_element = document.getElementById(`${form_id}`).elements;
    for (var i = 0; i < form_element.length; i++) {
        if (form_element[i].required) {
            requiredValidation(form_element[i]);
        } else {
            notRequiredValidation(form_element[i]);
        }
    }
    if (error.length) {
        return false;
    } else {
        return true;
    }
}

function requiredValidation(element) {

    var data_error = "";
    if (element.hasAttribute('data-error')) {
        data_error = element.getAttribute('data-error');
    }
    switch (element.type) {
        case "text":
            if (element.id) {
                document.getElementById(element.id).value = element.value.trim();
            }
            if (!element.value) {
                error.push({ id: element.id, error: data_error ? data_error : `This field is required` })
            }
            else if (element.pattern) {
                let patt = new RegExp(element.pattern);
                if (!(patt).test(element.value)) {
                    error.push({ id: element.id, error: data_error ? data_error : `match a given format` })
                }
            } else if (element.minLength) {
                if (element.minLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required minimum ${element.minLength} character` })
                }
            } else if (element.maxLength) {
                if (element.maxLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required maximum ${element.maxLength} character` })
                }
            }
            break;
        case "number":
            if (element.id) {
                document.getElementById(element.id).value = element.value.trim();
            }
            if (!element.value) {
                error.push({ id: element.id, error: data_error ? data_error : `This field is required` })
            }
            else if (element.pattern) {
                let patt = new RegExp(element.pattern);
                if (!(patt).test(element.value)) {
                    error.push({ id: element.id, error: data_error ? data_error : `match a given format` })
                }
            } else if (element.minLength) {
                if (element.minLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required minimum ${element.minLength} character` })
                }
            } else if (element.maxLength) {
                if (element.maxLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required maximum ${element.maxLength} character` })
                }
            }
            break;
        case "password":
            if (element.id) {
                document.getElementById(element.id).value = element.value.trim();
            }
            if (!element.value) {
                error.push({ id: element.id, error: data_error ? data_error : `Please enter your password` })
            }
            else if (element.pattern) {
                let patt = new RegExp(element.pattern);
                if (!(patt).test(element.value)) {
                    error.push({ id: element.id, error: data_error ? data_error : `Please provide valid password that is at least 8 characters, upper and lowercase letters, 1 number and 1 special character` })
                }
            } else if (element.minLength) {
                if (element.minLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required minimum ${element.minLength} character` })
                }
            } else if (element.maxLength) {
                if (element.maxLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required maximum ${element.maxLength} character` })
                }
            }
            break;
        case "email":
            if (element.id) {
                document.getElementById(element.id).value = element.value.trim();
            }
            if (!element.value) {
                error.push({ id: element.id, error: data_error ? data_error : `This field is required` })
            }
            else if ((/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(element.value)) {
                if (element.pattern) {
                    let patt = new RegExp(element.pattern);
                    if (!(patt).test(element.value)) {
                        error.push({ id: element.id, error: data_error ? data_error : `Please enter a valid email id` })
                    }
                }
                else if (element.minLength) {
                    if (element.minLength > element.value.length) {
                        error.push({ id: element.id, error: data_error ? data_error : `This field required minimum ${element.minLength} character` })
                    }
                } else if (element.maxLength) {
                    if (element.maxLength > element.value.length) {
                        error.push({ id: element.id, error: data_error ? data_error : `This field required maximum ${element.maxLength} character` })
                    }
                }
            } else {
                error.push({ id: element.id, error: data_error ? data_error : `Please enter a valid email id` })

            }
            break;
        case "textarea":
            if (element.id) {
                document.getElementById(element.id).value = element.value.trim();
            }
            if (!element.value) {
                error.push({ id: element.id, error: data_error ? data_error : `This field is required` })
            }
            else if (element.pattern) {
                let patt = new RegExp(element.pattern);
                if (!(patt).test(element.value)) {
                    error.push({ id: element.id, error: data_error ? data_error : `match a given format` })
                }
            } else if (element.minLength) {
                if (element.minLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required minimum ${element.minLength} character` })
                }
            } else if (element.maxLength) {
                if (element.maxLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required maximum ${element.maxLength} character` })
                }
            }
            break;
        default:

            break;

    }
    //console.error(error)
    if (error.length === 0) {
        var remove_error = document.getElementsByClassName("has-error");
        if (remove_error.length > 0) {
            for (var i = 0; i < remove_error.length; i++) {
                remove_error[i].innerHTML = ''
            }
        }
        return true;
    }
    error.map((i, index) => {
        var error_div = document.getElementById(i.id).nextSibling;
        //console.log(error_div)
        if (error_div !== null) {
            error_div.innerHTML = i.error;
            if (index === 0) {
                document.getElementById(i.id).focus();
            }
        }
        return i;
    })
    return false;
}

function notRequiredValidation(element) {
    // console.log(element)
    // console.log(element.minLength)
    var data_error = "";
    if (element.hasAttribute('data-error')) {
        data_error = element.getAttribute('data-error');
    }
    switch (element.type) {
        case "text":
            if (element.id) {
                document.getElementById(element.id).value = element.value.trim();
            }
            if (element.pattern) {
                let patt = new RegExp(element.pattern);
                if (!(patt).test(element.value)) {
                    error.push({ id: element.id, error: data_error ? data_error : `match a given format` })
                }
            } else if (element.minLength) {
                if (element.minLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required minimum ${element.minLength} character` })
                }
            } else if (element.maxLength) {
                if (element.maxLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required maximum ${element.maxLength} character` })
                }
            }
            break;
        case "number":
            if (element.id) {
                document.getElementById(element.id).value = element.value.trim();
            }
            if (element.pattern) {
                let patt = new RegExp(element.pattern);
                if (!(patt).test(element.value)) {
                    error.push({ id: element.id, error: data_error ? data_error : `match a given format` })
                }
            } else if (element.minLength) {
                if (element.minLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required minimum ${element.minLength} character` })
                }
            } else if (element.maxLength) {
                if (element.maxLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required maximum ${element.maxLength} character` })
                }
            }
            break;
        case "password":
            if (element.id) {
                document.getElementById(element.id).value = element.value.trim();
            }
            if (element.pattern) {
                let patt = new RegExp(element.pattern);
                if (!(patt).test(element.value)) {
                    error.push({ id: element.id, error: data_error ? data_error : `match a given format` })
                }
            } else if (element.minLength) {
                if (element.minLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required minimum ${element.minLength} character` })
                }
            } else if (element.maxLength) {
                if (element.maxLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required maximum ${element.maxLength} character` })
                }
            }
            break;
        case "email":
            if (element.id) {
                document.getElementById(element.id).value = element.value.trim();
            }
            if ((/^([\w.%+-]+)@([\w-]+\.)+([\w]{1,})$/i).test(element.value)) {
                if (element.pattern) {
                    let patt = new RegExp(element.pattern);
                    if (!(patt).test(element.value)) {
                        error.push({ id: element.id, error: data_error ? data_error : `Please enter a valid email id` })
                    }
                }
                else if (element.minLength) {
                    if (element.minLength > element.value.length) {
                        error.push({ id: element.id, error: data_error ? data_error : `This field required minimum ${element.minLength} character` })
                    }
                } else if (element.maxLength) {
                    if (element.maxLength > element.value.length) {
                        error.push({ id: element.id, error: data_error ? data_error : `This field required maximum ${element.maxLength} character` })
                    }
                }
            } else {
                error.push({ id: element.id, error: data_error ? data_error : `Please enter a valid email id` })

            }
            break;
        case "textarea":
            if (element.id) {
                document.getElementById(element.id).value = element.value.trim();
            }
            if (element.pattern) {
                let patt = new RegExp(element.pattern);
                if (!(patt).test(element.value)) {
                    error.push({ id: element.id, error: data_error ? data_error : `match a given format` })
                }
            } else if (element.minLength) {
                if (element.minLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required minimum ${element.minLength} character` })
                }
            } else if (element.maxLength) {
                if (element.maxLength > element.value.length) {
                    error.push({ id: element.id, error: data_error ? data_error : `This field required maximum ${element.maxLength} character` })
                }
            }
            break;
        default:

            break;

    }
    // console.error(error)
    if (error.length === 0) {
        var remove_error = document.getElementsByClassName("has-error");
        if (remove_error.length > 0) {
            for (var i = 0; i < remove_error.length; i++) {
                remove_error[i].innerHTML = ''
            }
        }
        return true;
    }
    error.map((i, index) => {
        var error_div = document.getElementById(i.id).nextSibling;
        if (error_div) {
            error_div.innerHTML = i.error;
            if (index === 0) {
                document.getElementById(i.id).focus();
            }
        }
        return i;
    })
    return false;

}

export function clearError() {
    //alert('ab')
    error = [];
    var remove_error = document.getElementsByClassName("has-error");
    if (remove_error.length > 0) {
        for (var i = 0; i < remove_error.length; i++) {
            remove_error[i].innerHTML = ''
        }
    }
} 
