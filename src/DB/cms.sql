-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2024 at 10:53 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms`
--

-- --------------------------------------------------------

--
-- Table structure for table `packaging`
--

CREATE TABLE `packaging` (
  `id` varchar(255) NOT NULL,
  `incoming_c` float NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `waste_e` float NOT NULL,
  `f_e` varchar(255) NOT NULL,
  `if_t` float NOT NULL,
  `is_t` float NOT NULL,
  `ma_t` float NOT NULL,
  `nf_t` float NOT NULL,
  `new_food` varchar(500) NOT NULL,
  `ifunguro` varchar(500) NOT NULL,
  `isezerano` varchar(500) NOT NULL,
  `magaju` varchar(500) NOT NULL,
  `envelopes` float NOT NULL,
  `waste_f` float NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packaging`
--

INSERT INTO `packaging` (`id`, `incoming_c`, `reporter`, `waste_e`, `f_e`, `if_t`, `is_t`, `ma_t`, `nf_t`, `new_food`, `ifunguro`, `isezerano`, `magaju`, `envelopes`, `waste_f`, `comment`, `date`) VALUES
('0848f5', 1100, 'nyamnaswa', 787, '{\"IF\":3434,\"IS\":77887,\"MA\":787,\"NF\":1000}', 65, 195, 125, 95, '{\"5\":0,\"10\":0,\"25\":0}', '{\"5\":2,\"10\":3,\"25\":1}', '{\"5\":8,\"10\":8,\"25\":3}', '{\"5\":9,\"10\":3,\"25\":2}', 2, 200, 'anaza day', '2024-11-11 00:00:00'),
('0f4f89', 1100, 'heshima', 787, '{}', 0, 0, 0, 95, '{\"5\":3,\"10\":3,\"25\":2}', '{\"5\":0,\"10\":0,\"25\":0}', '{\"5\":0,\"10\":0,\"25\":0}', '{\"5\":0,\"10\":0,\"25\":0}', 2, 200, 'byakunze', '2024-11-15 00:00:00'),
('5wz3uj', 1100, 'heshima', 787, '{\"IF\":3434,\"IS\":778,\"MA\":787,\"NF\":100}', 65, 130, 125, 95, '{\"5\":3,\"10\":3,\"25\":2}', '{\"5\":2,\"10\":3,\"25\":1}', '{\"5\":5,\"10\":8,\"25\":1}', '{\"5\":9,\"10\":3,\"25\":2}', 10, 200, '45345453', '2024-11-17 00:00:00'),
('llwtyl', 1100, 'heshima', 787, '{\"IF\":3434,\"IS\":77887,\"MA\":787,\"NF\":1000}', 65, 195, 125, 95, '{\"5\":3,\"10\":3,\"25\":2}', '{\"5\":2,\"10\":3,\"25\":1}', '{\"5\":8,\"10\":8,\"25\":3}', '{\"5\":9,\"10\":3,\"25\":2}', 2, 200, 'anaza day', '2024-11-11 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `packaging_track`
--

CREATE TABLE `packaging_track` (
  `id` varchar(255) NOT NULL,
  `weights` varchar(700) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `if_t` float NOT NULL,
  `is_t` float NOT NULL,
  `ma_t` float NOT NULL,
  `nf_t` float NOT NULL,
  `env_t` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packaging_track`
--

INSERT INTO `packaging_track` (`id`, `weights`, `act_type`, `destination`, `if_t`, `is_t`, `ma_t`, `nf_t`, `env_t`, `date`) VALUES
('0848f5', '{\"NF\":65,\"IS\":195,\"MA\":125,\"IF\":95,\"envelope\":20}', 'add', 'packaging', 190, 195, 125, 65, 20, '2024-11-15 10:07:03'),
('0f4f89', '{\"NF\":0,\"IS\":0,\"MA\":0,\"IF\":95,\"envelope\":10}', 'add', 'packaging', 95, 0, 0, 0, 10, '2024-11-15 00:52:05'),
('5wz3uj', '{\"NF\":95,\"IS\":130,\"MA\":125,\"IF\":65,\"envelope\":50}', 'add', 'packaging', 320, 520, 375, 255, 80, '2024-11-17 10:07:58'),
('87fje3', '{\"NF\":0,\"IS\":0,\"MA\":0,\"IF\":0,\"envelope\":0}', 'minus', 'sales', 320, 520, 375, 255, 80, '2024-11-17 23:41:12'),
('9927gh', '{\"NF\":3425,\"IS\":0,\"MA\":0,\"IF\":2325,\"envelope\":0}', 'minus', 'sales', -4330, 520, 375, -6595, 80, '2024-11-17 23:47:58'),
('k46bw9', '{\"NF\":3425,\"IS\":0,\"MA\":0,\"IF\":2325,\"envelope\":0}', 'minus', 'sales', -2005, 520, 375, -3170, 80, '2024-11-17 23:47:30'),
('llwtyl', '{\"NF\":95,\"IS\":195,\"MA\":125,\"IF\":65,\"envelope\":30}', 'add', 'packaging', 255, 390, 250, 160, 30, '2024-11-15 10:11:09'),
('yhay52', '{\"NF\":3425,\"IS\":0,\"MA\":0,\"IF\":2325,\"envelope\":0}', 'minus', 'sales', -11305, 520, 375, -16870, 80, '2024-11-17 23:51:02'),
('z3d432', '{\"NF\":3425,\"IS\":0,\"MA\":0,\"IF\":2325,\"envelope\":0}', 'minus', 'sales', -8980, 520, 375, -13445, 80, '2024-11-17 23:50:53'),
('z9pa98', '{\"NF\":3425,\"IS\":0,\"MA\":0,\"IF\":2325,\"envelope\":0}', 'minus', 'sales', -6655, 520, 375, -10020, 80, '2024-11-17 23:49:50');

-- --------------------------------------------------------

--
-- Table structure for table `preparation`
--

CREATE TABLE `preparation` (
  `id` varchar(255) NOT NULL,
  `incoming_c` float NOT NULL,
  `prepared_c` float NOT NULL,
  `waste_f` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `preparation`
--

INSERT INTO `preparation` (`id`, `incoming_c`, `prepared_c`, `waste_f`, `reporter`, `comment`, `date`) VALUES
('b40z7n', 100, 98, '2', 'heshima', 'byari nezaaa', '2024-11-11 13:08:34');

-- --------------------------------------------------------

--
-- Table structure for table `preparation_track`
--

CREATE TABLE `preparation_track` (
  `id` varchar(255) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `destination` varchar(255) NOT NULL,
  `r_weight` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `preparation_track`
--

INSERT INTO `preparation_track` (`id`, `act_type`, `weight`, `destination`, `r_weight`, `date`) VALUES
('0848f5', 'minus', -1100, 'packaging', 95800, '2024-11-15 10:07:03'),
('0f4f89', 'minus', -1100, 'packaging', 96900, '2024-11-15 00:52:05'),
('25a2f1', 'minus', -100, 'packaging', 98000, '2024-11-14 11:02:33'),
('54v0mo', 'minus', -100, 'packaging', 198, '2024-11-13 21:31:37'),
('5wz3uj', 'minus', -1100, 'packaging', 93600, '2024-11-17 10:07:58'),
('b40z7n', 'add', 98, 'preparation', 98, '2024-11-11 13:08:34'),
('llwtyl', 'minus', -1100, 'packaging', 94700, '2024-11-15 10:11:08');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `distributor` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `g_amount` float NOT NULL,
  `r_amount` float NOT NULL,
  `no_sacks` int(11) NOT NULL,
  `ifunguro` varchar(700) NOT NULL,
  `isezerano` varchar(700) NOT NULL,
  `magaju` varchar(700) NOT NULL,
  `new_food` varchar(700) NOT NULL,
  `envelope` varchar(700) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `reporter`, `distributor`, `client`, `g_amount`, `r_amount`, `no_sacks`, `ifunguro`, `isezerano`, `magaju`, `new_food`, `envelope`, `comment`, `date`) VALUES
('2129ms', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', 'r', '2024-11-17 00:00:00'),
('32bt7l', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', '200', '2024-11-17 00:00:00'),
('5x7e0m', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', 'uhu', '2024-11-17 00:00:00'),
('60hr0m', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', '200', '2024-11-17 00:00:00'),
('87fje3', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', 'fgfd', '2024-11-17 00:00:00'),
('955qq5', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', '2323', '2024-11-17 00:00:00'),
('9927gh', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', '4rew', '2024-11-17 00:00:00'),
('b93ye2', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', '200', '2024-11-17 00:00:00'),
('k46bw9', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', '4rew', '2024-11-17 00:00:00'),
('k9155x', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', 'bbn', '2024-11-17 00:00:00'),
('vat8h2', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', '200', '2024-11-17 00:00:00'),
('yhay52', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', '4rew', '2024-11-17 00:00:00'),
('z3d432', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', '4rew', '2024-11-17 00:00:00'),
('z8h756', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', 'ewe', '2024-11-17 00:00:00'),
('z9pa98', 'heshima', 'kapooo', 'dwdwdsdsddsdd', 1000, 1000, 10, '{}', '{}', '{}', '{}', '{}', '4rew', '2024-11-17 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sales_track`
--

CREATE TABLE `sales_track` (
  `id` varchar(255) NOT NULL,
  `weights` varchar(255) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `totals` varchar(255) NOT NULL,
  `g_amount` float NOT NULL,
  `r_amount` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales_track`
--

INSERT INTO `sales_track` (`id`, `weights`, `act_type`, `destination`, `totals`, `g_amount`, `r_amount`, `date`) VALUES
('87fje3', '{\"NF\":0,\"IS\":0,\"MA\":0,\"IF\":0,\"envelope\":0}', 'add', 'sales', '{\"nf\":0,\"is\":0,\"ma\":0,\"if\":0,\"envelope\":0}', 1000, 1000, '0000-00-00 00:00:00'),
('9927gh', '{\"NF\":3425,\"IS\":0,\"MA\":0,\"IF\":2325,\"envelope\":0}', 'add', 'sales', '{\"nf\":3425,\"is\":0,\"ma\":0,\"if\":2325,\"envelope\":0}', 1000, 1000, '0000-00-00 00:00:00'),
('k46bw9', '{\"NF\":3425,\"IS\":0,\"MA\":0,\"IF\":2325,\"envelope\":0}', 'add', 'sales', '{\"nf\":3425,\"is\":0,\"ma\":0,\"if\":2325,\"envelope\":0}', 1000, 1000, '0000-00-00 00:00:00'),
('yhay52', '{\"NF\":3425,\"IS\":0,\"MA\":0,\"IF\":2325,\"envelope\":0}', 'add', 'sales', '{\"nf\":6850,\"is\":0,\"ma\":0,\"if\":4650,\"envelope\":0}', 1000, 1000, '2024-11-17 23:51:02'),
('z3d432', '{\"NF\":3425,\"IS\":0,\"MA\":0,\"IF\":2325,\"envelope\":0}', 'add', 'sales', '{\"nf\":3425,\"is\":0,\"ma\":0,\"if\":2325,\"envelope\":0}', 1000, 1000, '2024-11-17 23:50:53'),
('z9pa98', '{\"NF\":3425,\"IS\":0,\"MA\":0,\"IF\":2325,\"envelope\":0}', 'add', 'sales', '{\"nf\":3425,\"is\":0,\"ma\":0,\"if\":2325,\"envelope\":0}', 1000, 1000, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `stock1`
--

CREATE TABLE `stock1` (
  `id` varchar(255) NOT NULL,
  `dist_names` varchar(255) NOT NULL,
  `dist_plate_no` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `dryness` varchar(255) NOT NULL,
  `moldness` varchar(255) NOT NULL,
  `net_price` float NOT NULL,
  `gross_price` float NOT NULL,
  `amount_paid` float NOT NULL,
  `r_amount` float NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock1`
--

INSERT INTO `stock1` (`id`, `dist_names`, `dist_plate_no`, `weight`, `dryness`, `moldness`, `net_price`, `gross_price`, `amount_paid`, `r_amount`, `reporter`, `comment`, `date`) VALUES
('g5ore3', 'nyamanswa', 'rah008d', 500, '199', '192', 100000, 120000, 1200000, 0, 'nyamanswa', 'byAje', '2024-11-07 16:04:10'),
('zi19e8', 'nyamanswa', 'rah008d', 1000, '199', '192', 100000, 120000, 1200000, 0, 'nyamanswa', 'byAje', '2024-11-06 16:03:39');

-- --------------------------------------------------------

--
-- Table structure for table `stock1_track`
--

CREATE TABLE `stock1_track` (
  `id` varchar(255) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `destination` varchar(255) NOT NULL,
  `r_weight` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock1_track`
--

INSERT INTO `stock1_track` (`id`, `act_type`, `weight`, `destination`, `r_weight`, `date`) VALUES
('b40z7n', 'minus', -98, 'preparation', 1402, '2024-11-11 13:08:34'),
('g5ore3', 'add', 500, 'stock1', 1500, '2024-11-07 16:04:10'),
('zi19e8', 'add', 1000, 'stock1', 1000, '2024-11-06 16:03:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `names` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `2FA` varchar(255) DEFAULT NULL,
  `dateadded` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `names`, `email`, `role`, `password`, `2FA`, `dateadded`) VALUES
('1', 'SYSTEM', 'info@system.com', 'SYSTEM', '$2b$10$gPipJR4kqPUt/lKmhn8/lOwWQSvexGhayV.QnWnj7TLwOt0vR/wY2', NULL, '2024-11-06 16:43:38'),
('E15JV9y', 'TYCOON', 'hesh.teo@gmail.com', 'recorder', '$2b$10$yXQomeba7Ehp7Dbp/YAA/.HOUIKxYfTJTlbjFaek8F97wxjD.1teO', NULL, '2024-11-06 19:34:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `packaging`
--
ALTER TABLE `packaging`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packaging_track`
--
ALTER TABLE `packaging_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preparation`
--
ALTER TABLE `preparation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preparation_track`
--
ALTER TABLE `preparation_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_track`
--
ALTER TABLE `sales_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock1`
--
ALTER TABLE `stock1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock1_track`
--
ALTER TABLE `stock1_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
