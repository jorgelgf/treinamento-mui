import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material'
import { data } from './utils';
import { useDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router';

interface IListItemLinkProps {
  to: string;
  label: string;
  icon: string;
  onClick: (() => void) | undefined;
}

const ListItemLink = ({ icon, to, label, onClick }: IListItemLinkProps) => {

  const navigate = useNavigate();
  const resolvePath = useResolvedPath(to);
  const match = useMatch({
    path: resolvePath.pathname, end: false
  });

  const handleClick = () => {
    onClick?.();
    navigate(to)
  }
  return (
    <ListItemButton
      selected={!!match}
      onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

export const MenuLateral = ({ children }: any) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext()


  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
      >
        <Box
          width={theme.spacing(28)}
          display='flex'
          flexDirection='column'
          height='100%'
        >
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            height={theme.spacing(20)}

          >
            <Avatar
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12),
              }}
              alt='Foto de perfil - Jorge'
              src={data.fotoPerfil}
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component='nav'>
              {drawerOptions.map((drawerOptions) => {
                return <ListItemLink
                  key={drawerOptions.label}
                  icon={drawerOptions.icon}
                  to={drawerOptions.path}
                  label={drawerOptions.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              })}

            </List>

          </Box >


        </Box>
      </Drawer>
      <Box
        height='100vh'
        marginLeft={smDown ? 0 : theme.spacing(28)}
      >
        {children}
      </Box>
    </>
  )
}