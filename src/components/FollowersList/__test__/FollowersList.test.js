import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    );
};

describe("FollowersList Tests", () => {

    beforeEach(() => {
        console.log("RUNNING BEFORE EACH TEST ");
    });

	it("should find a follower in followers list", async () => {
		render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
	});

    // it("should find 5 followers in followers list", async () => {
	// 	render(<MockFollowersList />);
    //     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    //     expect(followerDivElements.length).toBe(5);
	// });
});
