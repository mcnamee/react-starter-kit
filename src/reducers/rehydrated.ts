interface IAction { readonly type: string; }

export default (state = false, action: IAction) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};
