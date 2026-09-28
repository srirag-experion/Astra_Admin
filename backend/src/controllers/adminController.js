export const getDashboardStats = async (req, res, next) => {
  try {
    const stats = {
      totalUsers: 1420,
      activeSessions: 384,
      monthlyRevenue: "$42,850",
      systemHealth: "99.98%",
      recentActivity: [
        { id: 1, user: "Alex Morgan", action: "Upgraded plan to Enterprise", time: "10 mins ago" },
        { id: 2, user: "Sarah Chen", action: "Updated security policy", time: "25 mins ago" },
        { id: 3, user: "Devon Lane", action: "Provisioned new database cluster", time: "1 hour ago" },
        { id: 4, user: "Marcus Vance", action: "Generated API Key", time: "3 hours ago" }
      ]
    };

    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = [
      { id: 'usr_1', name: 'Alex Morgan', email: 'alex.m@astra.io', role: 'Admin', status: 'Active' },
      { id: 'usr_2', name: 'Sarah Chen', email: 'sarah.c@astra.io', role: 'Developer', status: 'Active' },
      { id: 'usr_3', name: 'Devon Lane', email: 'devon.l@astra.io', role: 'Manager', status: 'Inactive' },
      { id: 'usr_4', name: 'Marcus Vance', email: 'marcus.v@astra.io', role: 'Developer', status: 'Active' }
    ];

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    next(error);
  }
};
