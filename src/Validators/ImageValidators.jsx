

export default function ImageValidators(e) {
  if(e.target.files && e.target.files.length ===1){
    let pic=e.target.files[0]
    console.log(pic)
    if(!(["image/jpeg","image/jpg","image/png","image/"].includes(pic.type)))
        return "Invalid pic type,please Upload .jpg,.jpeg,.png,.gif Image Only"
    else if(pic.size>1048576)
        return "pic size is too heavy, Please Upload an Image Upto 1 MB"
    else
        return ""
  }
}
