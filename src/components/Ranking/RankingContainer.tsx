import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  TableRow,
  TableCell,
  IconButton,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  Collapse,
  Tooltip
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import styles from './styles.module.css'

const RankingContainer = () => {

  const [label, setLabel] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setLabel(event.target.value as string);
  };

  const rows = [
    createData('Vietto', 1, 54, 999, 87),
    createData('Jamela', 2, 54, 998, 122),
    createData('Coolbalck', 3, 52, 524, 55),
  ];

  function createData(
    name: string,
    pos: number,
    level: number,
    kills: number,
    deaths: number,
  ) {
    return {
      name,
      pos,
      level,
      kills,
      deaths,
      history: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          amount: 3,
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          amount: 1,
        },
      ],
    };
  }

  /* table custom styles */
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="center">{row.pos}</TableCell>
          <TableCell align="center">{row.level}</TableCell>
          <TableCell align="center">{row.kills}</TableCell>
          <TableCell align="center">{row.deaths}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Descripción
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="center">Amount</TableCell>
                      <TableCell align="center">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="center">{historyRow.amount}</TableCell>
                        <TableCell align="center">
                          {Math.round(historyRow.amount * row.deaths * 100) / 100}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <>
      <Grid className={styles.woodContainer} p={2}>
        <Typography variant="h3" align="center" textAlign={'center'} color='white' fontFamily='-moz-initial' className={styles.txtShadow}>
          Ranking
        </Typography>
        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' mt={2}>
          <Tooltip placement="left-start" arrow title={
            <>
              <Typography color="inherit">Mayor ganador Vietto</Typography>
              <Typography color="inherit">con 25 copas de oro</Typography>
            </>
          }>
            <Typography variant="h4" textAlign={'center'} fontFamily='-moz-initial' className={styles.typeOfRank}>
              <span className={styles.northColor}>Trofeos de oro</span>
            </Typography>
          </Tooltip>
          <Tooltip placement="top" arrow title={
            <>
              <Typography color="inherit">Mayor ganador Jamela</Typography>
              <Typography color="inherit">con 7 eventos ganados</Typography>
            </>
          }>
            <Typography variant="h4" textAlign={'center'} fontFamily='-moz-initial' className={styles.typeOfRank}>
              <span className={styles.southColor}>Eventos ganados</span>
            </Typography>
          </Tooltip>
          <Tooltip placement="top" arrow title={
            <>
              <Typography color="inherit">Mayor ganador Kelher</Typography>
              <Typography color="inherit">con 125 retos ganados</Typography>
            </>
          }>
            <Typography variant="h4" textAlign={'center'} fontFamily='-moz-initial' className={styles.typeOfRank}>
              <span className={styles.eastColor}>Retos ganados</span>
            </Typography>
          </Tooltip>
          <Tooltip placement="right-start" arrow title={
            <>
              <Typography color="inherit">Mas kills Jamela</Typography>
              <Typography color="inherit">con 585 usuarios matados</Typography>
            </>
          }>
            <Typography variant="h4" textAlign={'center'} fontFamily='-moz-initial' className={styles.typeOfRank}>
              <span className={styles.westColor}>Eventos ganados</span>
            </Typography>
          </Tooltip>
        </Box>
      </Grid>
      <Grid className={styles.woodContainer} p={4} pt={1} mt={3}>
        <Typography variant="h4" align="center" mt={1} color={'white'} fontFamily='-moz-initial' className={styles.txtShadow}>
          Usuarios por nivel
        </Typography>
        <Box sx={{ minWidth: 120 }} mt={2}>
          <FormControl component={Paper} fullWidth>
            <InputLabel id="classes">Clase</InputLabel>
            <Select
              labelId="classes-label"
              id="classes-label-id"
              value={label}
              label='clases'
              onChange={handleChange}
            >
              <MenuItem value={'mago'}>Mago</MenuItem>
              <MenuItem value={'paladin'}>Paladín</MenuItem>
              <MenuItem value={'bardo'}>Bardo</MenuItem>
              <MenuItem value={'asesino'}>Asesino</MenuItem>
              <MenuItem value={'clerigo'}>Clerigo</MenuItem>
              <MenuItem value={'guerrero'}>Guerrero</MenuItem>
              <MenuItem value={'pirata'}>Pirata</MenuItem>
              <MenuItem value={'druida'}>Druida</MenuItem>
              <MenuItem value={'cazador'}>Cazador</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box mt={0}>
          <TableContainer component={Paper} className={styles.tableContainer} >
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <StyledTableCell />
                  <StyledTableCell>Nombre</StyledTableCell>
                  <StyledTableCell align="center">Posición</StyledTableCell>
                  <StyledTableCell align="center">Nivel</StyledTableCell>
                  <StyledTableCell align="center">Matados</StyledTableCell>
                  <StyledTableCell align="center">Muertes</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
      <Grid className={styles.woodContainer} p={4} pt={1} mt={3}>
        <Typography variant="h4" align="center" mb={2} mt={1} color={'white'} fontFamily='-moz-initial' className={styles.txtShadow}>
          Clanes por puntos
        </Typography>
        <Box sx={{ minWidth: 120 }}>
          <FormControl component={Paper} fullWidth>
            <InputLabel id="classes">Clase</InputLabel>
            <Select
              labelId="classes-label"
              id="classes-label-id"
              value={label}
              label='clases'
              onChange={handleChange}
            >
              <MenuItem value={'mago'}>Mago</MenuItem>
              <MenuItem value={'paladin'}>Paladín</MenuItem>
              <MenuItem value={'bardo'}>Bardo</MenuItem>
              <MenuItem value={'asesino'}>Asesino</MenuItem>
              <MenuItem value={'clerigo'}>Clerigo</MenuItem>
              <MenuItem value={'guerrero'}>Guerrero</MenuItem>
              <MenuItem value={'pirata'}>Pirata</MenuItem>
              <MenuItem value={'druida'}>Druida</MenuItem>
              <MenuItem value={'cazador'}>Cazador</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box mt={0}>
          <TableContainer component={Paper} className={styles.tableContainer} >
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <StyledTableCell />
                  <StyledTableCell>Clan</StyledTableCell>
                  <StyledTableCell align="center">Posición</StyledTableCell>
                  <StyledTableCell align="center">Puntos</StyledTableCell>
                  <StyledTableCell align="center">Matados</StyledTableCell>
                  <StyledTableCell align="center">Torneos</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>

    </>
  )
}

export default RankingContainer;