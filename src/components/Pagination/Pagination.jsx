import { useSelector, useDispatch } from "react-redux";
import { selectPage, selectTotalPages } from "redux/selectors";
import { setPage } from "redux/slice";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationWrapper } from './Pagination.styled';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c41e3a',
    },
  },
});

export const PaginationMUI = () => {
  const page = useSelector(selectPage);
  const pages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  const handleChangePage = (e, value) => {
    dispatch(setPage(value));
  };

  return (
    <PaginationWrapper>
      <ThemeProvider theme={theme}>
        <Stack spacing={3}>
          <Pagination
            color="primary"
            size="large"
            count={pages}
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </ThemeProvider>
    </PaginationWrapper>
  );
};