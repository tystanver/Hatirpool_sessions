
"use client"
// import { useBulkOrderDataQuery } from "@/hooks/reactQuery/useOrderDataQuery";
import { formValidation } from "./validaton/formValidation";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
// import { enqueueSnackbar } from "notistack";
import { useState } from "react";
// import regionData from "./@media/regionData.json";
// import styleData from "./@media/styleData.json";

const BoostBrand = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    // Toggle the active button state
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  const isButtonActive = (buttonName) => {
    return activeButton === buttonName;
  };
  // const { mutateAsync } = useBulkOrderDataQuery();
  // const router = useRouter();
  const {
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      shipping_address: "",
      business_name: "",
      city: "",
      country: "",
      deadline: "",
      state: "",
      zip_code: "",
      budget: "",
      instruction: "",
      style: "",
      size_gender_quantity: "",
      print_embellishment: "",
      region: "",
    },
    validationSchema:  formValidation ,
    onSubmit: async (data) => {
      try {
        // await mutateAsync(data);
        console.log(data)
        enqueueSnackbar("Ordered Successfully", {
          variant: "success",
        });

        setIsFormSubmitted(true);
        resetForm();
        // router.push("/dashboard/allbulk-order");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <section className="container mx-auto px-4 xl:px-6 pt-5 lg:pt-10">
      <div className="text-center">
        <h2 className="text-[32px] font-semibold text-white">
         Book Your Ticket Now
        </h2>
        <div className="flex items-center justify-center">
          <p className="lg:mt-[30px] mt-5 lg:w-2/4 text-center text-white">
             Active is a cutting-edge activewear brand that combines
            innovative design with functionality, making it the perfect choice
            for the modern, active individual. Its high-quality fabrics and
            attention
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-[30px] xl:gap-[50px] gap-8 lg:mt-[60px] mt-4 ">
      <button
          className={`border border-[#4C8488] rounded-[15px] xl:px-5 xl:py-[30px] lg:px-5 lg:py-5 px-4 py-3 text-[#4C8488] lg:text-[32px] text-lg ${
            isButtonActive("bangladesh") ? "bg-amber-500 text-black" : ""
          }`}
          onClick={() => handleButtonClick("bangladesh")}
        >
          Bangaldesh
        </button>
        <button
          className={`border border-[#4C8488] rounded-[15px] lg:px-5  xl:py-[30px] lg:py-5 px-4 py-3 text-[#4C8488] lg:text-[32px] text-lg ${
            isButtonActive("northAmerica") ? "bg-amber-500 text-black" : ""
          }`}
          onClick={() => handleButtonClick("northAmerica")}
        >
          North America
        </button>
        <button
          className={`border border-[#4C8488] rounded-[15px] lg:px-5 lg:py-5 xl:py-[30px] px-4 py-3 text-[#4C8488] lg:text-[32px] text-lg ${
            isButtonActive("asiaOthers") ? "bg-amber-500 text-black" : ""
          }`}
          onClick={() => handleButtonClick("asiaOthers")}
        >
          Asia/Others
        </button>
        <button
          className={`border border-[#4C8488] rounded-[15px] lg:px-20 lg:py-5 xl:py-[30px] px-4 py-3 text-[#4C8488] lg:text-[32px] text-lg ${
            isButtonActive("oceania") ? "bg-amber-500 text-black" : ""
          }`}
          onClick={() => handleButtonClick("oceania")}
        >
          Ocenia
        </button>
        <button
          className={`border border-[#4C8488] rounded-[15px] lg:px-5 lg:py-5 xl:py-[30px] px-4 py-3 text-[#4C8488] lg:text-[32px] text-lg ${
            isButtonActive("europe") ? "bg-amber-500 text-black" : ""
          }`}
          onClick={() => handleButtonClick("europe")}
        >
          Europe
        </button>
        <button
          className={`border border-[#4C8488] rounded-[15px] lg:px-5 lg:py-5 xl:py-[30px] px-4 py-3 text-[#4C8488] lg:text-[32px] text-lg ${
            isButtonActive("southAmerica") ? "bg-amber-500 text-black" : ""
          }`}
          onClick={() => handleButtonClick("southAmerica")}
        >
          South America
        </button>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl text-center lg:text-left text-white">
         Informaton , Date , Place 
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="lg:grid grid-cols-3 lg:gap-[140px] gap-10 lg:mt-[50px] mt-10">
            <div className="col-span-2 lg:space-y-6 space-y-3">
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-[30px]">
                <div className="lg:col-span-2 lg:space-y-6 space-y-3">
                  <TextField
                    required
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    name="first_name"
                    label="First Name*"
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ classes: { input: 'white-input' } }}
                    error={touched.first_name && errors.first_name}
                    helperText={touched.first_name && errors.first_name}
                  />
                  <TextField
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    name="email"
                    label="Email*"
                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email} 
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ classes: { input: 'white-input' } }}
                  />
                </div>

                <div className="col-span-1 lg:space-y-6 space-y-3">
                  <TextField
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    name="last_name"
                    label="Last Name*"
                    error={touched.last_name && errors.last_name}
                    helperText={touched.last_name && errors.last_name}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ classes: { input: 'white-input' } }}
                  />
                  <TextField
                    value={values.phone_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    name="phone_number"
                    label="Phone Number *"
                    error={touched.phone_number && errors.phone_number}
                    helperText={touched.phone_number && errors.phone_number}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ classes: { input: 'white-input' } }}
                  />
                </div>
              </div>
              <div className="lg:space-y-6 space-y-3">
                <TextField
                  value={values.shipping_address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  name="shipping_address"
                  label="Shipping Address *"
                  error={touched.shipping_address && errors.shipping_address}
                  helperText={
                    touched.shipping_address && errors.shipping_address
                  }
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ classes: { input: 'white-input' } }}
                />
                <TextField
                  value={values.business_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  name="business_name"
                  label="Business Name*"
                  error={touched.business_name && errors.business_name}
                  helperText={touched.business_name && errors.business_name}
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ classes: { input: 'white-input' } }}
                />
              </div>

              <div className="grid lg:grid-cols-3 grid-cols-2 gap-[30px]">
                <div className="lg:col-span-2 lg:space-y-6 space-y-3">
                  <TextField
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    name="city"
                    label="City*"
                    error={touched.city && errors.city}
                    helperText={touched.city && errors.city}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ classes: { input: 'white-input' } }}
                  />
                  <TextField
                    value={values.bangladesh}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    name="country"
                    label="Country*"
                    error={touched.country && errors.country}
                    helperText={touched.country && errors.country}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ classes: { input: 'white-input' } }}
                  />
                  <TextField
                    type="date"
                    value={values.deadline}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    name="deadline"
                    placeholder="Use one of these formats instead: YYYY-MM-DD*"
                    // label="Deadline*"
                    error={touched.deadline && errors.deadline}
                    helperText={touched.deadline && errors.deadline}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ classes: { input: 'white-input' } }}
                  />
                </div>

                <div className="col-span-1 lg:space-y-6 space-y-3">
                  <TextField
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    name="state"
                    label="State*"
                    error={touched.state && errors.state}
                    helperText={touched.state && errors.state}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ classes: { input: 'white-input' } }}
                  />
                  <TextField
                    value={values.post}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    name="zip_code"
                    label="Post/Zip Code*"
                    error={touched.zip_code && errors.zip_code}
                    helperText={touched.zip_code && errors.zip_code}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ classes: { input: 'white-input' } }}
                  />
                  <TextField
                    value={values.budget}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    name="budget"
                    label="Budget *"
                    error={touched.budget && errors.budget}
                    helperText={touched.budget && errors.budget}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ classes: { input: 'white-input' } }}
                  />
                </div>
              </div>
              {/* <div className="lg:space-y-6 space-y-3">
                <TextField
                  value={values.bulk}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  multiline
                  rows={3}
                  fullWidth
                  name="instruction"
                  label="Instructions regarding the Bulk Request Note Regarding the quotation request(if any)*"
                  error={touched.instruction && errors.instruction}
                  helperText={touched.instruction && errors.instruction}
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ classes: { input: 'white-input' } }}
                />
              </div> */}
            </div>
            {/* <div className="lg:space-y-6 space-y-3 mt-4 lg:mt-0">
              <div className="border rounded-[10px] px-[34px] border-[#4C8488] flex justify-between items-center py-3">
              <p>T-Shirt</p>
              <FormControlLabel value="female" control={<Radio />} label="" />
            </div>
            <div className="border rounded-[10px] px-[34px] border-[#4C8488] flex justify-between items-center py-3">
              <p>T-Polo T-shirt</p>
              <FormControlLabel value="female" control={<Radio />} label="" />
            </div>
            <div className="border rounded-[10px] px-[34px] border-[#4C8488] flex justify-between items-center py-3">
              <p>T-Sweatshirt</p>
              <FormControlLabel value="female" control={<Radio />} label="" />
            </div>
            <div className="border rounded-[10px] px-[34px] border-[#4C8488] flex justify-between items-center py-3">
              <p>Hoodie</p>
              <FormControlLabel value="female" control={<Radio />} label="" />
            </div>
            <div className="border rounded-[10px] px-[34px] border-[#4C8488] flex justify-between items-center py-3">
              <p>Trouser</p>
              <FormControlLabel value="female" control={<Radio />} label="" />
            </div>
              <div>
                <FormControl
                  fullWidth
                  required
                  error={touched.style && Boolean(errors.style)}
                >
                  <InputLabel>Style</InputLabel>
                  <Select
                    name="style"
                    value={values.style}
                    label="Style"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value={""}>Select</option>
                    {styleData.map((i) => (
                      <MenuItem key={Math.random()} value={i.value}>
                        {i.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {
                    <FormHelperText>
                      {touched.style && errors.style}
                    </FormHelperText>
                  }
                </FormControl>
              </div>
              <div>
                <TextField
                  value={values.size_gender_quantity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  name="size_gender_quantity"
                  label="Size, Gender Quantity Specification*"
                  error={
                    touched.size_gender_quantity && errors.size_gender_quantity
                  }
                  helperText={
                    touched.size_gender_quantity && errors.size_gender_quantity
                  }
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ classes: { input: 'white-input' } }}
                />
              </div>
              <div>
                <TextField
                  value={values.print_embellishment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  name="print_embellishment"
                  label="Print and Embellishment (if any)*"
                  error={
                    touched.print_embellishment && errors.print_embellishment
                  }
                  helperText={
                    touched.print_embellishment && errors.print_embellishment
                  }
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ classes: { input: 'white-input' } }}
                />
              </div>
              <div>
                <FormControl
                  fullWidth
                  required
                  error={touched.region && Boolean(errors.region)}
                >
                  <InputLabel>Region</InputLabel>
                  <Select
                    name="region"
                    value={values.region}
                    label="Region"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value={""}>Select</option>
                    {regionData.map((i) => (
                      <MenuItem key={Math.random()} value={i.value}>
                        {i.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {
                    <FormHelperText>
                      {touched.region && errors.region}
                    </FormHelperText>
                  }
                </FormControl>
              </div>
            </div> */}
          </div>
          <div className="flex gap-[30px] items-center justify-center lg:justify-start mt-6">
            <button
              className="text-white text-lg font-medium hover:bg-white hover:text-[#4C8488] 
                 bg-amber-600 rounded-[30px] lg:px-8 lg:py-4 px-4 py-2 hover:border-[#4C8488] hover:border"
              type="submit"
            >
              Submit
            </button>
            <button
              className="text-lg font-medium rounded-[30px] lg:px-8 lg:py-4 px-4 py-2 border-[#4C8488] border
                 text-[#4C8488] border-[#4C8488 hover:bg-amber-600 hover:text-white"
              type="reset"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BoostBrand;
