

export default function FormValidators(e) {
    let { name, value } = e.target
    switch (name) {
        case "name":
        if (!value || value === 0)
                name + "name field is mendatory"
            else if (value.lenta < 3 || value.lenta > 50)
                name + "lenth  must be 3-50 characters"
            else
                return ""

            default:
            return ""


    }




}
