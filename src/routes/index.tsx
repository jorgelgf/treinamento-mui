import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial'
      },
      {
        icon: 'star',
        path: '/cidades',
        label: 'Cidades'
      }

    ])
  }, [setDrawerOptions])
  return (

    <Routes>
      <Route path='/pagina-inicial'
        element=
        {
          <Button
            onClick={toggleDrawerOpen}
            variant='contained'
            color='primary'>Toggle drawer</Button>
        }
      />
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  )
}

export { };
