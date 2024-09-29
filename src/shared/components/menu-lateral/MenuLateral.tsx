import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import { data } from './utils';

export const MenuLateral = ({ children }: any) => {
  const theme = useTheme();

  return (
    <>
      <Drawer open={true}
        variant='permanent'
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
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary='Página Inicial' />

              </ListItemButton>

            </List>

          </Box >


        </Box>
      </Drawer>
      <Box
        height='100vh'
        marginLeft={theme.spacing(28)}
      >
        {children}
      </Box>
    </>
  )
}