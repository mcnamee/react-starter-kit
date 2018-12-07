export default (state = false, action) => {
  switch (action.type) {
    /**
     * Replace Member
     */
    case 'MEMBER_REPLACE': {
      if (action.data) {
        return {
          firstName: action.data.first_name,
          lastName: action.data.last_name,
          email: action.data.email,
        };
      }
      return false;
    }

    /**
     * Remove Member data
     */
    case 'MEMBER_RESET': {
      return false;
    }
    default:
      return state;
  }
}
