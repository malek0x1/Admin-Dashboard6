import React from 'react'
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import {
    Button,
    Container,
    Fab,
    FormControlLabel,
    FormLabel,
    makeStyles,
    MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Snackbar,
    TextField,
    Tooltip,
} from "@material-ui/core";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import { Person as AddIcon } from '@mui/icons-material';




const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
    props,
    ref
) {
    const { onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value
                    }
                });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    );
});

NumberFormatCustom.propTypes = {
    // name: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired
};
const useStyles = makeStyles((theme) => ({

    container: {
        width: 300,
        height: 300,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
        ,
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
        },
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    },
}));
const ModalX = () => {


    const [values, setValues] = React.useState({
        textmask: "(100) 000-0000",
        numberformat: "10000"
    });

    const handleChange2 = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };





    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [Visibility, setVisibility] = useState("Public");




    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            // setOpenAlert(false)
            return;
        }

        setOpenAlert(false);
    };




    return (
        <>
            <div className="Main-Body-Form">
                <p className="bolder-p-2" style={{ color: "#5D4E7B" }}>Volume</p>
                <input placeholder='Volume' value="0.00" />
                <button className="BS-btn purple" onClick={() => setOpen(true)}>Buy</button>
                <button className="BS-btn orange" onClick={() => setOpen(true)}>Sell</button>

            </div>
            <Modal onClose={() => setOpen(!open)} open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                        </div>
                        <div className={classes.item}>
                            <p className='gray-p'>Value</p>
                            <TextField
                                label=""
                                value={values.numberformat}
                                placeholder='value'
                                onChange={handleChange2}
                                name="numberformat"
                                id="formatted-numberformat-input"
                                InputProps={{
                                    inputComponent: NumberFormatCustom
                                }}
                                variant="standard"
                            />

                        </div>

                        <div className={classes.item}>
                            <TextField select label="Visibility" value={Visibility} onChange={(e) => setVisibility(e.target.value)}>
                                <MenuItem value="Public">USDT</MenuItem>
                                <MenuItem value="Private">BIT</MenuItem>
                                <MenuItem value="Unlisted">ETH</MenuItem>
                            </TextField>
                            <TextField
                                id="standard-basic"
                                label='Type "yes" if you are sure'
                                size="small"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className={classes.item}>

                        </div>
                        <div className={classes.item}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => setOpen(false)}
                            >
                                Back
                            </Button>
                            <Button

                                variant="outlined"
                                color="primary"
                                style={{ marginLeft: 30 }}
                                onClick={() => { setOpenAlert(true); setOpen(false); }}
                            >
                                Proceed
                            </Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar
                open={openAlert}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </>

    )
}

export default ModalX