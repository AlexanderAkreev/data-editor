import styled from 'styled-components'


const PrintApplicationStyle = styled.div`
	
	font-family: Roboto-Regular;

	.header {
		background-size: 50px;
	}
	
	.operation-type {
		border-top: solid 1px;
		text-align: center;
		padding: 20px 0;
		font-size: 25px;
	}
	
	.print-data {
		border-top: solid 1px;
		border-bottom: solid 1px;
		display: flex;
		.part {
			flex-basis: calc(100% / 3);
			padding: 15px;
			&:nth-of-type(2) {
				border-left: solid 1px;
				border-right: solid 1px;
			}
		}

		.title {
			font-weight: bold;
			text-align: center;
			padding: 0 0 15px 0;
			font-size: 18px;
		}

		.field {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 25px 0;

			.field-title {
				margin: 0 0 5px 0;
				font-size: 13px;
			}

			.field-val {
				font-size: 18px;
				text-align: center;
			}
		}
	}

	.footer {
		margin: 200px 0 0 0;
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		.footer-part {
			display: flex;
			align-items: flex-end;
		}
		.line {
			position: relative;
			height: 1px;
			background: black;
			width: 150px;
			margin: 0 10px;
			.sub {
				position: absolute;
				top: 10px;
				width: 100%;
				text-align: center;
				font-size: 10px;
			}
		}
	}

`

export default PrintApplicationStyle