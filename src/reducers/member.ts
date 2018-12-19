interface IMemberFromAPIResponse {
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
}

interface IAction {
  readonly type: string;
  readonly data: IMemberFromAPIResponse;
}

export default (state = {}, action: IAction) => {
  const { type, data } = action;

  switch (type) {
    /**
     * Replace Member
     */
    case 'MEMBER_REPLACE': {
      if (data) {
        return {
          email: data.email || '',
          firstName: data.first_name || '',
          lastName: data.last_name || '',
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
};
