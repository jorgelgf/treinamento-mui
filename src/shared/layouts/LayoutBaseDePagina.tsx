import { Icon, IconButton, Theme, useMediaQuery, useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';
interface ILayoutBaseDePaginaProps {
  titulo: string;
  children: ReactNode;
  barraDeFerramentas: ReactNode | undefined;
}

export const LayoutBaseDePagina = ({ children, titulo, barraDeFerramentas }: ILayoutBaseDePaginaProps) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Box
      height='100%'
      display='flex'
      flexDirection='column'
      gap={1}
    >
      <Box
        padding={1}
        display='flex'
        alignItems='center'
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>)}
        <Typography
          whiteSpace='nowrap'
          overflow='hidden'
          textOverflow='ellipsis'
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
        >
          {titulo}
        </Typography>
      </Box>
      {barraDeFerramentas && (
        <Box>
          {barraDeFerramentas}
        </Box>)
      }
      <Box
        flex={1}
        textOverflow='auto'
      >
        {children}
      </Box>
    </Box>);
}