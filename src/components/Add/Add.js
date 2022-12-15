import React from 'react';
import { useForm } from "react-hook-form";

function Add(props) {
    // console.log(props)


    // const emailRGEX = /[ AZ0-9._%+-] + @ [ AZ0 -9.-] + \. [ AZ] {2,}/
    // const telRGEX = /^[\s()+-]*([0-9][\s()+-]*){10,20}$/       //   /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/
    //                  /^\+380\d{3}\d{2}\d{2}\d{2}$/       /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/
    //                  /^(\+38|8)?0[0-9]{9}$/              /^(\+38)?0(39|50|63|66|67|68|73|89|9[1-9])[0-9]{7}$/
    //                  маскированній ввод

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    })



    return (
        <div>
            <form action="#">
                <div>
                    <label htmlFor="">User name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">User surname</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">User tel</label>
                    <input type="tel"/>
                </div>
                <div>
                    <label htmlFor="">User email</label>
                    <input type="text"/>
                </div>

                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    );
}

export default Add;