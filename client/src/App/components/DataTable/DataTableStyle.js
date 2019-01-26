import styled from 'styled-components'


const DataTableStyle = styled.div `
	
	min-height: ${(props)=>props.minHeight ? props.minHeight : 0}px;
	background-color: white;

	.data-table {
		width: 100%;
		background-color: white;
		border: none;
		border-collapse: collapse;

	}

	.cell {
		padding: 5px;
		font-family: 'Roboto-Regular';
		
	}

	.header {
		background-color: #EFEEF8;

		.cell {
			color: #424652;
			font-family: 'Roboto-Bold';
			cursor: pointer;
			min-height: 40px;
			
			.sort {
				display: flex;
				flex-direction: column;
			}

			.sort-icon {
				fill: #FFFFFF;
				
				width: 12px;
				height: 12px;
				
				&.asc {
					transform: rotate(180deg);
				}
			}

			.sort-icon *{
				fill: #FFFFFF;
			}

			.cell-data-wrapper {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.cell.select { 
			cursor: auto;
		}
	}

	.body {
		.cell.select {
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.checkbox {
			border-radius: 2px;
			border: 1px solid rgba(66, 70, 82, 0.4);
			width: 15px;
			height: 15px;			
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
		}

		.checkbox.active {
			background-image: url(assets/img/icons/check.svg);
			background-color: #E35205;
		}

		.row {
			border-bottom: 1px solid rgba(66, 70, 82, 0.2);
			.cell {
				min-height: 40px;
			}
		}
	}


`

export default DataTableStyle