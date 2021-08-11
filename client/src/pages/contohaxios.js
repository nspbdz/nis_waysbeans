const handleUpdateProfile = async (e) => {
    e.preventDefault();
    console.log("clicked")
    
    // try {
      const formData = new FormData();
      // formData.set("status", "Pending");
      formData.append("imageFile", dataUpdate.imageFile, dataUpdate.imageFile.name);
      axios({
        method: "patch",
        url: "http://localhost:5000/api/v1/user",
        data: formData,
        headers: { "Content-Type": "multipart/form-data",Authorization: "Bearer " +token, },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      }
      const [dataUpdate, setDataUpdate] = useState([])
  const handleChange = (e) => {
    console.log(e.target.value)
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };