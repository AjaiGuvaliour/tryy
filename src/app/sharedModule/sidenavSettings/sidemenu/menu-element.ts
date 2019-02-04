export const menus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Dashboard',
                'link': false,
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            }
        ]
    },
    {
        'name': 'Department',
        'icon': 'dashboard',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'ManageDepartment',
                'link': '/main/department/manageDepartment',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            },
            {
                'name': 'ManageStaff',
                'link': '/main/department/manageStaff',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            },
            {
                'name': 'ManageStudent',
                'link': '/main/department/manageStudent',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            }
        ]

    }

 
];
