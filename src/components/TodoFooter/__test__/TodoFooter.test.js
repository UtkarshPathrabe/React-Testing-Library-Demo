import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
	<BrowserRouter>
		<TodoFooter
			numberOfIncompleteTasks={numberOfIncompleteTasks}
		/>
	</BrowserRouter>
);

describe("TodoFooter Tests", () => {
	it("should render 5 incomplete tasks", () => {
		render(<MockTodoFooter numberOfIncompleteTasks={5} />);
		const paragraphElement = screen.getByText(/5 tasks left/i);
		expect(paragraphElement).toBeInTheDocument();
	});
	
	it("should render 1 incomplete task", () => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);
		const paragraphElement = screen.getByText(/1 task left/i);
		expect(paragraphElement).toBeInTheDocument();
	});
	
	it("assert truthy value and is element visible", () => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);
		const paragraphElement = screen.getByText(/1 task left/i);
		expect(paragraphElement).toBeTruthy();
		expect(paragraphElement).toBeVisible();
	});
});
