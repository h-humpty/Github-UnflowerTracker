import styled from 'styled-components';

const HeaderStyle = styled.div`
	text-align: center;
	padding-top: 1rem;

	.wrapper {
		width: 320px;
		display: flex;
		gap: 1rem;
		padding: 2rem 1rem;
		margin: 0 auto;
		flex-direction: column;
		justify-content: center;

		.input__wrapper {
			display: flex;
			padding-bottom: 5px;
			border-bottom: 1px solid black;

			input {
				width: 100%;
				padding: 5px 10px;
				border: 0;

				::placeholder {
					color: var(--gray);
				}

				:focus {
					outline: none;
				}
			}
		}

		button {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 90px;
			height: 30px;
			margin: 0 auto;
			padding: 2px 15px;
			border-radius: 10px;
			border: 0;
			background-color: blue;
			color: white;

			@media (min-width: 768px) {
				gap: 0.3rem;
			}
		}

		@media (min-width: 768px) {
			flex-direction: row;
			align-items: center;
		}
	}
`;

export default HeaderStyle;
