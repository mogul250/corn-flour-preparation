-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2024 at 01:56 PM
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
('b40z7n', 'add', 98, 'preparation', 98, '2024-11-11 13:08:34');

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
