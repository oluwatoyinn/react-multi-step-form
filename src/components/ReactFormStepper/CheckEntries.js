import React from 'react'
import { List, ListItem, ListItemText,Typography,Paper, Container, Card, CardContent,makeStyles, TableCell,TableContainer, TableBody,Table, TableRow } from '@material-ui/core/';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    title: {
        fontSize: 20,
        padding:'40px',
        fontWeight:600,
        textAlign:'center'
      },
  });

const CheckEntries =(props) =>{
    
    const classes = useStyles()
    const {prefix,
            firstName,
            lastName,
            middleName,
            suffix,
            gender,
            dob,
            pob,
            credentialType,
            credentialIdNumber,
            dateOfIssue,
            dateOfExpiration,
            issuingAuthority,
            dataMeans,
            isDiscounted,
            address,
            suite,
            city,
            state,
            postalCode,
            emailAddress, 
        } = props

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardContent>
                    <Typography color="textSecondary" className={classes.title} gutterBottom>
                        View Entries
                    </Typography>
                    <TableContainer component={Paper} >
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell> Prefix </TableCell>
                                    <TableCell> {prefix}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> First Name </TableCell>
                                    <TableCell> {firstName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Last Name </TableCell>
                                    <TableCell> {lastName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Middle Name</TableCell>
                                    <TableCell> {middleName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Suffix </TableCell>
                                    <TableCell> {suffix}</TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell> Gender </TableCell>
                                    <TableCell> {gender}</TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell> Date of Birth </TableCell>
                                    <TableCell> {dob}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Place of Birth </TableCell>
                                    <TableCell> {pob}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Credential Type </TableCell>
                                    <TableCell> {credentialType}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Credential Number </TableCell>
                                    <TableCell> {credentialIdNumber}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Date of Issue </TableCell>
                                    <TableCell> {dateOfIssue}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Date of Expiration </TableCell>
                                    <TableCell> {dateOfExpiration}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Issuing Authority </TableCell>
                                    <TableCell> {issuingAuthority}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Feedback </TableCell>
                                    <TableCell> {dataMeans}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Discount </TableCell>
                                    <TableCell> {isDiscounted}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Address </TableCell>
                                    <TableCell> {address}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Apt/Suite </TableCell>
                                    <TableCell> {suite}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> City </TableCell>
                                    <TableCell> {city}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> State </TableCell>
                                    <TableCell> {state}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Postal Code </TableCell>
                                    <TableCell> {postalCode}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Email Address </TableCell>
                                    <TableCell> {emailAddress}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card> 
        </React.Fragment>
    )
}


export default CheckEntries