import React from 'react'


const WarnMessage = () => {
	return (
		<div className='warn-message'>
			<div className='title'>
				Внимание!
			</div>
			<div className='text'>
				Если возврат будет проходить через PopUP -  поля можно не заполнять, но предупредить о необходимости иметь данные по счету с собой, при приезде в PopUP
			</div>
		</div>
	)
}


export default WarnMessage