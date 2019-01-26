import styled from 'styled-components'



const SelectorStyle = styled.div `
	height: 100%;
	.selector {	
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		

		.control {
			height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.divider {
				width: 1px;
				height: 90%;
				background-color: #424652;
				opacity: 0.3;
				margin: 0 8px;
			}

		}

		.selected-count {
			margin-left: 17px;
			color: rgba(66, 70, 82, 0.5);
		}
	}


`

export default SelectorStyle