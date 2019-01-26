import styled from 'styled-components'


const LoginStyle = styled.div `
		
	background-color: white;
	min-width: 320px;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	padding: 40px 60px;
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 10%;

	.title {
	    display: flex;
	    align-items: center;
	    margin-bottom: 20px;
	    font-family: "AGAvalancheC-Regular";
	    font-size: 21px;
	    &:before {
	        content: "";
	        display: inline-block;
	        background-image: url(assets/img/icons/lock.svg);
	        background-repeat: no-repeat;
	        background-size: 30px 30px;
	        background-position: center;
	        width: 60px;
	        height: 60px;
	        background-color: #E5E5E5;
	        border-radius: 30px;
	        margin-right: 10px;
	    }
	   
	}

	.label {
		font-family: "AGAvalancheC-Regular";
		margin-bottom: 7px;
	}

	.input-wrapper {
	    position: relative;
	    margin-bottom: 20px;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    background-color: #EFEEF8;
	    border-radius: 4px;
	    padding: 0px 20px;

	    .input {
	        height: 40px;
	        background-color: transparent;
	        border: none;
	        width: 100%;
	        outline: none;
	        font-family: "Roboto-Regular";
	        &::placeholder {
	            font-size: 14px;
	        }
	    }

	    &.user-password {
	        .eye {
	        
	            background-image: url(assets/img/icons/eye.svg);
	            display: inline-block;
	            width: 15px;
	            height: 15px;
	            background-repeat: no-repeat;
	            background-position: center;
	            background-size: contain;
	            cursor: pointer;
	        }
	    }

	}
	
	
	.login-button {
	    width: 100px;
	}

`

export default LoginStyle