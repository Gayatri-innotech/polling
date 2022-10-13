import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import UserLogin from "./UserLogin";

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}
const LoginReg = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return <>
        <Grid container>
            <Grid item lg={10} sm={10} xs={12}>
                <Card sx={{ width: '100%', height: '100%' }}>
                    <Box>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} textColor="secondary" indicatorColor="secondary" onChange={handleChange}>
                                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                            </Tabs>

                        </Box>
                        <TabPanel value={value} index={0}>
                            <UserLogin />
                        </TabPanel>
                        <TabPanel value={value} index={1}>Registration</TabPanel>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    </>;
};

export default LoginReg;