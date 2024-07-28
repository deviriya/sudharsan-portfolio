import React from 'react'
import { BounceInDownButton } from '../animation/bounceIn'
import { Grid, TextField, Tooltip } from '@mui/material'
import { Instagram, Mail, MapPin, Phone, User } from 'lucide-react';
import { Button } from '../components/ui/button'
import Lottie from 'lottie-react';
import Globe from '../animation/Globe.json';


function Contactme() {
    return (
        <div className='m-8 md:my-12'>
            <Grid container spacing={2} className='items-center'>
                <Grid item md={6}>
                    <p className='dark:text-white opacity-60 text-xs md:text-sm'>Free for chit chat?</p>
                    <BounceInDownButton>
                        <p className='text-pink-600 font-bold mb-4 text-2xl md:text-4xl'>Contact me</p>
                    </BounceInDownButton>
                    <form>
                        <div className='relative'>
                            <input
                                className='mb-3 dark:bg-[#000] w-full py-3 pl-10 border border-[#1e1e1e]
                                rounded-md focus:border-pink-400 text-sm md:text-sm focus:outline-none focus:ring-0 text-slate-400'
                                type='text'
                                placeholder='Enter your name' />
                            <User size={20} className='absolute text-slate-400 top-3 left-2' />
                        </div>
                        <div className='relative w-full'>
                            <input
                                className='mb-3 dark:bg-[#000] w-full py-3 pl-10 border border-[#1e1e1e]
                                rounded-md focus:border-pink-400 text-sm md:text-sm focus:outline-none focus:ring-0 text-slate-400'
                                type='text'
                                placeholder='Enter your name' />
                            <Mail size={20} className='absolute text-slate-400 top-3 left-2' />
                        </div>
                        <TextField
                            variant="outlined"
                            placeholder='Enter your message'
                            multiline
                            rows={6}
                            fullWidth
                            InputLabelProps={{
                                Shrink: true,
                            }}
                            sx={{
                                // Root class for the input field
                                "& .MuiOutlinedInput-root": {
                                    color: "#94a3b8",
                                    fontSize:"13px",
                                    // Class for the border around the input field
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#1e1e1e",
                                        borderWidth: "1px",
                                    },
                                    "&.Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#f472b6",
                                            borderWidth: "1px",
                                        },
                                    },
                                },
                                // Class for the label of the input field
                                "& .MuiInputLabel-outlined": {
                                    color: "#94a3b8",
                                },
                            }}
                        />

                        <Button className='inline-flex w-full my-4 items-center px-4 py-2 text-sm font-medium dark:text-white bg-pink-600 dark:bg-pink-600 border border-pink-600 rounded-md dark:hover:bg-[#0b0b0b] hover:bg-[#fff] dark:hover:text-pink-600 hover:text-pink-600 duration-300 
                                focus:ring-0 focus:outline-none focus:ring-gray-100 focus:text-pink-600'>
                            Submit
                        </Button>
                    </form>

                </Grid>
                <Grid item md={6}>
                    <Lottie animationData={Globe} loop={true} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Contactme