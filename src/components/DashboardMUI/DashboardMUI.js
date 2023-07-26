import MUIDataTable from 'mui-datatables';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Box } from '@mui/material';

const muiCache = createCache({
	key: 'mui-datatables',
	prepend: true,
});

const DashboardMUI = () => {
	const [responsive, setResponsive] = useState('vertical');
	const [tableBodyHeight, setTableBodyHeight] = useState('400px');
	const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState('400px');
	const [searchBtn, setSearchBtn] = useState('true');
	const [downloadBtn, setDownloadBtn] = useState(true);
	const [printBtn, setPrintBtn] = useState(true);
	const [viewColumnBtn, setViewColumnBtn] = useState(true);
	const [filterBtn, setFilterBtn] = useState(true);

	const columns = [
		{ name: 'Name', options: { filterOptions: { fullWidth: true } } },
		'Title',
		'Location',
	];

	const options = {
		search: searchBtn,
		download: downloadBtn,
		print: printBtn,
		viewColumns: viewColumnBtn,
		filter: filterBtn,
		filterType: 'dropdown',
		responsive,
		tableBodyHeight,
		tableBodyMaxHeight,
		onTableChange: (action, state) => {
			console.log(action);
			console.dir(state);
		},
	};

	const data = [
		['Gabby George', 'Business Analyst', 'Minneapolis'],
		[
			'Aiden Lloyd',
			"Business Consultant for an International Company and CEO of Tony's Burger Palace",
			'Dallas',
		],
		['Jaden Collins', 'Attorney', 'Santa Ana'],
		['Franky Rees', 'Business Analyst', 'St. Petersburg'],
		['Aaren Rose', 'null', 'Toledo'],
		['Johnny Jones', 'Business Analyst', 'St. Petersburg'],
		['Jimmy Johns', 'Business Analyst', 'Baltimore'],
		['Jack Jackson', 'Business Analyst', 'El Paso'],
		['Joe Jones', 'Computer Programmer', 'El Paso'],
		['Jacky Jackson', 'Business Consultant', 'Baltimore'],
		['Jo Jo', 'Software Developer', 'Washington DC'],
		['Donna Marie', 'Business Manager', 'Annapolis'],
	];
	// Duplicate the existing elements to make the array larger
	const largerData = [...data, ...data, ...data, ...data, ...data];

	return (
		<div className='dashboardmui' data-testid='dashboardmui'>
			<Box m={3}>
				<CacheProvider value={muiCache} sx={{ m: 2 }}>
					<ThemeProvider theme={createTheme()}>
						<Button variant='text' data-testid='buttonnew'>
							Text
						</Button>
						<FormControl>
							<InputLabel
								id='demo-simple-select-label'
								sx={{ bgcolor: '#fff' }}
							>
								Responsive Option
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={responsive}
								style={{
									width: '200px',
									marginBottom: '10px',
									marginRight: 10,
								}}
								onChange={(e) => setResponsive(e.target.value)}
							>
								<MenuItem value={'vertical'}>vertical</MenuItem>
								<MenuItem value={'standard'}>standard</MenuItem>
								<MenuItem value={'simple'}>simple</MenuItem>

								<MenuItem value={'scroll'}>scroll (deprecated)</MenuItem>
								<MenuItem value={'scrollMaxHeight'}>
									scrollMaxHeight (deprecated)
								</MenuItem>
								<MenuItem value={'stacked'}>stacked (deprecated)</MenuItem>
							</Select>
						</FormControl>
						<FormControl>
							<InputLabel id='table-body-height-label' sx={{ bgcolor: '#fff' }}>
								Table Body Height
							</InputLabel>
							<Select
								labelId='table-body-height-label'
								id='table-body-height-label'
								value={tableBodyHeight}
								style={{
									width: '200px',
									marginBottom: '10px',
									marginRight: 10,
								}}
								onChange={(e) => setTableBodyHeight(e.target.value)}
								aria-labelledby='table-body-height-label'
								data-test-id='table-body-height-select'
							>
								<MenuItem value={''}>[blank]</MenuItem>
								<MenuItem value={'400px'}>400px</MenuItem>
								<MenuItem value={'800px'}>800px</MenuItem>
								<MenuItem value={'100%'}>100%</MenuItem>
							</Select>
						</FormControl>
						{/* <FormControl>
							<InputLabel
								id='demo-simple-select-label'
								htmlFor='demo-simple-select'
								sx={{ bgcolor: '#fff' }}
							>
								Search Button
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={searchBtn}
								label='Search Button' // Adding label prop for compatibility
								style={{ width: '200px', marginBottom: '10px' }}
								onChange={(e) => setSearchBtn(e.target.value)}
								inputProps={{
									'data-testid': 'search-btn', // Adding data-testid for the Select component
									'aria-label': 'Search Button', // Adding aria-label for accessibility
								}}
							>
								<MenuItem value={'true'}>{'true'}</MenuItem>
								<MenuItem value={'false'}>{'false'}</MenuItem>
								<MenuItem value={'disabled'}>disabled</MenuItem>
							</Select>
						</FormControl> */}
						<FormControl>
							{/* <InputLabel
								id='demo-simple-select-label'
								label='Search Button'
								htmlFor='demo-simple-select'
								sx={{ bgcolor: '#fff' }}
							>
								Search Button
							</InputLabel> */}
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={searchBtn}
								label='Search Button'
								style={{ width: '200px', marginBottom: '10px' }}
								onChange={(e) => setSearchBtn(e.target.value)}
								data-testid='searchbtn'
							>
								<MenuItem value={'true'}>{'true'}</MenuItem>
								<MenuItem value={'false'}>{'false'}</MenuItem>
								<MenuItem value={'disabled'}>disabled</MenuItem>
							</Select>
						</FormControl>
						<FormControl>
							<InputLabel
								id='demo-simple-select-label'
								sx={{ bgcolor: '#fff' }}
							>
								Download Button
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={downloadBtn}
								style={{ width: '200px', marginBottom: '10px' }}
								onChange={(e) => setDownloadBtn(e.target.value)}
							>
								<MenuItem value={'true'}>{'true'}</MenuItem>
								<MenuItem value={'false'}>{'false'}</MenuItem>
								<MenuItem value={'disabled'}>disabled</MenuItem>
							</Select>
						</FormControl>
						<FormControl>
							<InputLabel
								id='demo-simple-select-label'
								sx={{ bgcolor: '#fff' }}
							>
								Print Button
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={printBtn}
								style={{ width: '200px', marginBottom: '10px' }}
								onChange={(e) => setPrintBtn(e.target.value)}
							>
								<MenuItem value={'true'}>{'true'}</MenuItem>
								<MenuItem value={'false'}>{'false'}</MenuItem>
								<MenuItem value={'disabled'}>disabled</MenuItem>
							</Select>
						</FormControl>
						<FormControl>
							<InputLabel
								id='demo-simple-select-label'
								sx={{ bgcolor: '#fff' }}
							>
								View Column Button
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={viewColumnBtn}
								style={{ width: '200px', marginBottom: '10px' }}
								onChange={(e) => setViewColumnBtn(e.target.value)}
							>
								<MenuItem value={'true'}>{'true'}</MenuItem>
								<MenuItem value={'false'}>{'false'}</MenuItem>
								<MenuItem value={'disabled'}>disabled</MenuItem>
							</Select>
						</FormControl>
						<FormControl>
							<InputLabel
								id='demo-simple-select-label'
								sx={{ bgcolor: '#fff' }}
							>
								Filter Button
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={filterBtn}
								style={{ width: '200px', marginBottom: '10px' }}
								onChange={(e) => setFilterBtn(e.target.value)}
							>
								<MenuItem value={'true'}>{'true'}</MenuItem>
								<MenuItem value={'false'}>{'false'}</MenuItem>
								<MenuItem value={'disabled'}>disabled</MenuItem>
							</Select>
						</FormControl>
						<MUIDataTable
							title={'Employee datalist'}
							data={largerData}
							columns={columns}
							options={options}
						/>
					</ThemeProvider>
				</CacheProvider>
			</Box>
		</div>
	);
};
export default DashboardMUI;
