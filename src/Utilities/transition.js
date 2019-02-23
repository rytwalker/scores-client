export default ({ property = 'all', length = '0.2s', ease = 'ease' }) => `
    transition: ${property} ${length} ${ease}
`;
