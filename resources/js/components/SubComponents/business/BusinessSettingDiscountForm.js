import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PaymentIcon from '@material-ui/icons/Payment';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(5),
           width:"20%",
            marginTop:'40px',
            direction: 'rtl',

        },
        "& .MuiFormLabel-root": {
            fontFamily:"IRANSans",
        },
        "& .MuiInputLabel-formControl":{
            right:0,
            left:'auto',
        },

    },
}));

const styleBgForm= {
    backgroundColor: '#f0f1f4',
    direction: 'rtl',
    width: '70%',
    height: '100%',
    minWidth:'270px',
    minHeight:'400px',
    fontFamily:'IRANSans',
    paddingTop: '40px',
    paddingBottom:'40px',

};
const headerSettingForm={
    backgroundColor:'#001a33',
    width: '100%',
    color:'#fff',
    fontFamily:'IRANSans',
    textAlign:'center',
    fontSize:'20px',

};
const styleButton={
    borderRadius: 3,
    color: 'black',
    height: 48,
    padding: '0 15px',
    fontFamily:'IRANSans',
    marginRight:'20px',
    width:'50%',
    marginTop: '15px',
};
const spaceBetwenButton={
    paddingTop:'40px',
    textAlign:'center',
};

function BusinessSettingDiscountForm(){

    const classes = useStyles();

return(
    <Container  style={styleBgForm} xs="6">
        <div className="card-header" style={headerSettingForm}>
            <SettingsIcon/>
             فرم تنظیم تخفیف ها

        </div>

        <div>
            <h3>
            نحوه تنظیم فرم:
            </h3>
            <br/>
            <p>
                <SpeakerNotesIcon/>                  این فرم برای تنظیم درصد تخفیف با توجه به تعداد خرید مشتری
                در مدت زمان معین میباشد. که کاربر مغازه دار (صاحب کسب کار)
                میتواند با پر کردن 3 فیلد مشخص نماید که مشتری با چند بار خرید
                در چه مدت زمانی دارای چه مقدار تخفیف باشد.
                به عنوان مثال: میتوانید مشخص نمایید
                مشتری پس از چه تعداد خرید(در قسمت تعداد خرید مشتری) میتواند چند درصد تخفیف
                 (در قسمت درصد تخفیف) و در چه مدت زمانی (در قسمت تعداد ماه قابل استفاده)
                از فروشکاه یا صاحب کسب و کار تخفیف داشته باشد.
                هر صاحب کسب و کار میتواند 3 سطر در رابطه با تخفیفات را به صورت
                صعودی تنظیم نماید. به عنوان مثال : یک مشتری(خریدار) میتواند با
                توجه به تعداد خرید تنظیم شده در سطر اول زمانی که تعداد خرید وی بیشتر
                از آن تعداد شد به مدت زمان تعیین شده از آن تخفیف استفاده نماید.
                حال این مقدار و ارقام میبتواند در سطر های
                بعدی بیشتر باشد که مشتری (خریدار) با مراجعه بیشتر از درصد تخفیف بیشتر
                در مدت زمان بیشتری استفاده نماید.
            </p>
            <p style={{fontWeight:'bold'}}><InfoIcon/> لازم به ذکر میباشد این فرم فقط یکبار توسط صاحب کسب و کار قابل تنظیم میباشد.  </p>
        </div>
      <form>
        <Grid className={classes.root}  container spacing={24}>

           <Grid style={{width:"100%",textAlign: "center"}}   item xs={3} sm={3} md>

                <TextField
                    id="noShoping1"
                    label="تعداد خرید مشتری"
                    type="number"
                    InputProps={{endAdornment:<ShoppingCartIcon/>}}
                />


                <TextField
                    id="discountPercent1"
                    label="درصد تخفیف % (فقط عدد)"
                    type="number"
                    InputProps={{endAdornment:<PaymentIcon/>}}
                />

                <TextField
                    id="durationDiscountUsage1"
                    label="تعداد ماه قابل استفاده"
                    type="number"
                    InputProps={{endAdornment:<DateRangeIcon/>}}

                />

           </Grid>
        </Grid>
            <Grid className={classes.root}  container spacing={24}>
                <Grid style={{width:"100%",textAlign: "center"}}   item xs={3} sm={3} md>

                <TextField
                    id="noShoping2"
                    label="تعداد خرید مشتری"
                    type="number"
                    InputProps={{endAdornment:<ShoppingCartIcon/>}}
                />


                <TextField
                    id="discountPercent2"
                    label="درصد تخفیف % (فقط عدد)"
                    type="number"
                    InputProps={{endAdornment:<PaymentIcon/>}}
                />

                <TextField
                    id="durationDiscountUsage2"
                    label="تعداد ماه قابل استفاده"
                    type="number"
                    InputProps={{endAdornment:<DateRangeIcon/>}}

                />

            </Grid>
        </Grid>

          <Grid className={classes.root}  container spacing={24}>

              <Grid style={{width:"100%",textAlign: "center"}}   item xs={3} sm={3} md>

                  <TextField
                      id="noShoping3"
                      label="تعداد خرید مشتری"
                      type="number"
                      InputProps={{endAdornment:<ShoppingCartIcon/>}}
                  />


                  <TextField
                      id="discountPercent3"
                      label="درصد تخفیف % (فقط عدد)"
                      type="number"
                      InputProps={{endAdornment:<PaymentIcon/>}}
                  />

                  <TextField
                      id="durationDiscountUsage3"
                      label="تعداد ماه قابل استفاده"
                      type="number"
                      InputProps={{endAdornment:<DateRangeIcon/>}}
                  />

              </Grid>
          </Grid>

          <div style={spaceBetwenButton}>
              <Button variant="outlined" color="primary" style={styleButton}>
                  <SaveIcon/>
                  ذخیره فرم
              </Button>
              <Button variant="outlined" color="primary" style={styleButton}>
                  <CancelIcon/>
                  کنسل فرم
              </Button>
          </div>
      </form>
    </Container>
);
}

export default BusinessSettingDiscountForm;