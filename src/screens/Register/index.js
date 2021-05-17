import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Text, View } from 'react-native'
import Container from '../../components/Common/Container';
import RegisterComponent from '../../components/Signup';
import envs from "../../config/env"
import { LOGIN } from '../../constants/routeNames';
import register from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';
import axiosInstance from '../../helpers/axiosInterceptor';

const Register = () => {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const { authDispatch, authState: { error, loading, data } } = useContext(GlobalContext)
    const { navigate } = useNavigation()


    useEffect(() => {
        if (data) {
            navigate(LOGIN)
        }
    }, [data]);

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value })
        if (value !== "") {
            if (name === "password") {
                if (value.length < 6) {
                    setErrors((prev) => {
                        return { ...prev, [name]: "This Field needs min 6 char" }
                    })
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null }
                    })
                }
            } else {
                setErrors((prev) => {
                    return { ...prev, [name]: null }
                })
            }
        } else {
            setErrors((prev) => {
                return { ...prev, [name]: "This Field Is Required" }
            })
        }
    }

    const onSubmit = () => {
        if (!form.userName) {
            setErrors((prev) => {
                return { ...prev, userName: "Please Add Username" }
            })
        }

        if (!form.firstName) {
            setErrors((prev) => {
                return { ...prev, firstName: "Please Add Firstname" }
            })
        }

        if (!form.lastName) {
            setErrors((prev) => {
                return { ...prev, lastName: "Please Add Lastname" }
            })
        }

        if (!form.email) {
            setErrors((prev) => {
                return { ...prev, email: "Please Add Email" }
            })
        }

        if (!form.password) {
            setErrors((prev) => {
                return { ...prev, password: "Please Add Password" }
            })
        }

        if (Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)) {
            register(form)(authDispatch)
        } else {
            console.log("some wrong")
        }

    }

    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
            error={error}
            loading={loading}
        />
    )
}

export default Register;