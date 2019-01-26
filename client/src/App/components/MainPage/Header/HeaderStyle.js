import styled from 'styled-components'


const HeaderStyle = styled.div `
	width: 100%;	
	.header {
		height: 80px;
		padding: 10px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		
		background-repeat: no-repeat;
		background-size: 60px;
		background-position: center;

	}
	

    .button {

        &.logout {
             &:after {
                 margin-left: 10px;
            }
        }
        
        &.add {
            &:after {
                margin-left: 10px;
            }
        }

        &.cancel {
        	&:after {
    		    margin-left: 10px;
        	}
        }
        
        
    }
	



`

export default HeaderStyle