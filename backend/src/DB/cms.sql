-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2024 at 08:23 AM
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
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `driver` varchar(255) NOT NULL,
  `plate_no` varchar(255) NOT NULL,
  `diesel` int(11) NOT NULL,
  `pieces` int(11) NOT NULL,
  `oil` int(11) NOT NULL,
  `wash` int(11) NOT NULL,
  `mechanic` int(11) NOT NULL,
  `o_m` int(11) NOT NULL,
  `inc_money` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `reporter`, `driver`, `plate_no`, `diesel`, `pieces`, `oil`, `wash`, `mechanic`, `o_m`, `inc_money`, `total`, `comment`, `date`) VALUES
('8o71j9', 'heshima', 'capoo', 'RAD001C', 1000, 1000, 1000, 1000, 1000, 1000, 10000, 4000, 'yegooooo', '2024-12-13 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `debts`
--

CREATE TABLE `debts` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `g_amount` float NOT NULL,
  `p_amount` float NOT NULL,
  `r_amount` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `debts`
--

INSERT INTO `debts` (`id`, `reporter`, `client`, `weight`, `g_amount`, `p_amount`, `r_amount`, `comment`, `date`) VALUES
('0p8ip2', 'Thierry', 'Denis', '100', 10000, 10000, 0, 'OK', '2024-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` varchar(255) NOT NULL,
  `names` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `salary` int(11) NOT NULL,
  `saving` int(11) NOT NULL,
  `social` int(11) NOT NULL,
  `advance` int(11) NOT NULL,
  `r_salary` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `names`, `title`, `phone`, `salary`, `saving`, `social`, `advance`, `r_salary`, `date`) VALUES
('jk1k1d', 'Bosco', 'Store keeper', '0781650876', 150000, 20000, 1000, 0, 129000, '2024-12-12 15:42:28');

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `diesel` float NOT NULL,
  `lifters` float NOT NULL,
  `boys` float NOT NULL,
  `driver` float NOT NULL,
  `room` float NOT NULL,
  `food` float NOT NULL,
  `travel` float NOT NULL,
  `r_amount` float NOT NULL,
  `inc_amount` float NOT NULL,
  `g_amount` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `o_m` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `reporter`, `diesel`, `lifters`, `boys`, `driver`, `room`, `food`, `travel`, `r_amount`, `inc_amount`, `g_amount`, `comment`, `o_m`, `date`) VALUES
('4puc72', 'hehs', 100, 100, 100, 100, 100, 100, 100, 0, 0, 100, 'e', 800, '2024-12-13 00:00:00'),
('6qh83q', 'Thierry', 20000, 5000, 2000, 5000, 0, 5000, 1000, 1647500, 1609500, 0, 'ok', 3295000, '2024-12-12 00:00:00'),
('qk5jsz', 'heshima', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 0, 0, 1000, 'done', 8000, '2024-12-13 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `leftovers`
--

CREATE TABLE `leftovers` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `w_pre` float NOT NULL,
  `w_incoming` float NOT NULL,
  `w_tot` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leftovers`
--

INSERT INTO `leftovers` (`id`, `reporter`, `w_pre`, `w_incoming`, `w_tot`, `comment`, `date`) VALUES
('w79c0c', 'Bosco', 0, 400, 400, 'ok', '2024-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `leftover_out`
--

CREATE TABLE `leftover_out` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `price` float NOT NULL,
  `pm` varchar(255) NOT NULL,
  `g_amount` float NOT NULL,
  `r_amount` float NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leftover_out`
--

INSERT INTO `leftover_out` (`id`, `reporter`, `client`, `weight`, `price`, `pm`, `g_amount`, `r_amount`, `p_name`, `comment`, `date`) VALUES
('q663s5', 'Bosco', 'Denis', 100, 200, 'momo', 20000, 0, 'Denis', 'ok', '2024-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `mr`
--

CREATE TABLE `mr` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `commande` varchar(255) NOT NULL,
  `returned` varchar(255) NOT NULL,
  `expenses` varchar(255) NOT NULL,
  `debts` varchar(255) NOT NULL,
  `p_debts` varchar(255) NOT NULL,
  `cash` float NOT NULL,
  `phone` float NOT NULL,
  `bank` float NOT NULL,
  `total` float NOT NULL,
  `comment` varchar(100) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mr`
--

INSERT INTO `mr` (`id`, `reporter`, `commande`, `returned`, `expenses`, `debts`, `p_debts`, `cash`, `phone`, `bank`, `total`, `comment`, `date`) VALUES
('qu8nlb', 'heshima', '1000', '1000', '1000', '1000', '2000', 3000, 34000, 44000, 81000, 'ok', '2024-12-12 00:00:00');

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
  `sack_no_IF` int(11) NOT NULL,
  `sack_no_IS` int(11) NOT NULL,
  `sack_no_MA` int(11) NOT NULL,
  `sack_no_NF` int(11) NOT NULL,
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

INSERT INTO `packaging` (`id`, `incoming_c`, `reporter`, `waste_e`, `f_e`, `if_t`, `is_t`, `ma_t`, `nf_t`, `sack_no_IF`, `sack_no_IS`, `sack_no_MA`, `sack_no_NF`, `new_food`, `ifunguro`, `isezerano`, `magaju`, `envelopes`, `waste_f`, `comment`, `date`) VALUES
('7r87z1', 100, 'kapoo', 0, '{\"IF\":3434,\"IS\":77887,\"MA\":787,\"NF\":10000}', 400, 400, 400, 175, 100, 100, 100, 200, '{\"5\":10,\"10\":10,\"25\":1}', '{\"5\":10,\"10\":10,\"25\":10}', '{\"5\":10,\"10\":10,\"25\":10}', '{\"5\":10,\"10\":10,\"25\":10}', 100, 200, '1000', '2024-12-14 02:30:18');

-- --------------------------------------------------------

--
-- Table structure for table `packaging_track`
--

CREATE TABLE `packaging_track` (
  `id` varchar(255) NOT NULL,
  `weights` varchar(700) NOT NULL,
  `r_weights` varchar(1000) NOT NULL,
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

INSERT INTO `packaging_track` (`id`, `weights`, `r_weights`, `act_type`, `destination`, `if_t`, `is_t`, `ma_t`, `nf_t`, `env_t`, `date`) VALUES
('7r87z1', '{\"NF\":175,\"IS\":400,\"MA\":400,\"IF\":400,\"envelope\":200}', '{\"NF\":{\"5\":10,\"10\":10,\"25\":1},\"IS\":{\"5\":10,\"10\":10,\"25\":10},\"IF\":{\"5\":10,\"10\":10,\"25\":10},\"MA\":{\"5\":10,\"10\":10,\"25\":10},\"envelope\":{\"2\":100}}', 'add', 'packaging', 400, 400, 400, 175, 200, '2024-12-14 02:30:18');

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
('e16988', 10000, 9000, '1000', 'Bosco', 'ok', '2024-12-12 15:05:56');

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
('0t5es4', 'minus', -100, 'packaging', 8600, '2024-12-14 02:17:21'),
('14t325', 'minus', -100, 'packaging', 8300, '2024-12-14 02:25:44'),
('2p89qc', 'minus', -100, 'packaging', 8500, '2024-12-14 02:17:45'),
('46h268', 'minus', -100, 'packaging', 8800, '2024-12-14 02:15:45'),
('7r87z1', 'minus', -100, 'packaging', 8200, '2024-12-14 02:30:18'),
('84o4s3', 'minus', -100, 'packaging', 8700, '2024-12-14 02:16:44'),
('e16988', 'add', 9000, 'preparation', 9000, '2024-12-12 15:05:56'),
('hh9t07', 'minus', -100, 'packaging', 8900, '2024-12-14 02:13:37'),
('k207dm', 'minus', -100, 'packaging', 8400, '2024-12-14 02:23:30');

-- --------------------------------------------------------

--
-- Table structure for table `p_debts`
--

CREATE TABLE `p_debts` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `debt` float NOT NULL,
  `p_debt` float NOT NULL,
  `pm` varchar(255) NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `r_debt` float NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `p_debts`
--

INSERT INTO `p_debts` (`id`, `reporter`, `client`, `debt`, `p_debt`, `pm`, `p_name`, `r_debt`, `comment`, `date`) VALUES
('39l081', 'Thierry', '0p8ip2', 5000, 1000, 'Cash', 'Denis', 4000, 'OK', '2024-12-12 00:00:00'),
('bujl3g', 'Thierry', '0p8ip2', 4000, 4000, 'Cash', 'Denis', 0, 'OK', '2024-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `returns`
--

CREATE TABLE `returns` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `ifunguro` varchar(1000) NOT NULL,
  `isezerano` varchar(1000) NOT NULL,
  `magaju` varchar(1000) NOT NULL,
  `new_food` varchar(1000) NOT NULL,
  `envelope` varchar(1000) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `returns`
--

INSERT INTO `returns` (`id`, `reporter`, `ifunguro`, `isezerano`, `magaju`, `new_food`, `envelope`, `comment`, `date`) VALUES
('23wp8s', 'Thierry', '{\"5\":40,\"10\":25,\"25\":20}', '{\"5\":0,\"10\":0,\"25\":0}', '{\"5\":0,\"10\":0,\"25\":0}', '{\"5\":40,\"10\":50,\"25\":20}', '{\"2\":0}', 'ok', '2024-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sacks`
--

CREATE TABLE `sacks` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `new_food` varchar(255) NOT NULL,
  `ifunguro` varchar(255) NOT NULL,
  `isezerano` varchar(255) NOT NULL,
  `magaju` varchar(255) NOT NULL,
  `envelope` varchar(255) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sacks`
--

INSERT INTO `sacks` (`id`, `reporter`, `new_food`, `ifunguro`, `isezerano`, `magaju`, `envelope`, `comment`, `date`) VALUES
('9ns3wp', '100', '{\"5\":10,\"10\":10,\"25\":10}', '{\"5\":10,\"10\":10,\"25\":10}', '{\"5\":10,\"10\":10,\"25\":10}', '{\"5\":10,\"10\":10,\"25\":10}', '{\"2\":100}', 'hehs', '2024-12-14 02:29:33');

-- --------------------------------------------------------

--
-- Table structure for table `sacks_track`
--

CREATE TABLE `sacks_track` (
  `id` varchar(255) NOT NULL,
  `sacks` varchar(700) NOT NULL,
  `r_sacks` varchar(1000) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sacks_track`
--

INSERT INTO `sacks_track` (`id`, `sacks`, `r_sacks`, `act_type`, `destination`, `date`) VALUES
('7r87z1', '{\"NF\":175,\"IS\":400,\"MA\":400,\"IF\":400,\"envelope\":200}', '{\"NF\":{\"5\":0,\"10\":0,\"25\":9},\"IS\":{\"5\":0,\"10\":0,\"25\":0},\"IF\":{\"5\":0,\"10\":0,\"25\":0},\"MA\":{\"5\":0,\"10\":0,\"25\":0},\"envelope\":{\"2\":0}}', 'minus', 'packaging', '2024-12-14 02:30:18'),
('9ns3wp', '{\"NF\":30,\"IS\":30,\"MA\":30,\"IF\":30,\"envelope\":200}', '{\"NF\":{\"5\":10,\"10\":10,\"25\":10},\"IS\":{\"5\":10,\"10\":10,\"25\":10},\"IF\":{\"5\":10,\"10\":10,\"25\":10},\"MA\":{\"5\":10,\"10\":10,\"25\":10},\"envelope\":{\"2\":100}}', 'add', 'sacks', '2024-12-14 02:29:33');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `distributor` varchar(255) NOT NULL,
  `g_amount` float NOT NULL,
  `sack_no_NF` int(11) NOT NULL,
  `sack_no_IF` int(11) NOT NULL,
  `sack_no_IS` int(11) NOT NULL,
  `sack_no_MA` int(11) NOT NULL,
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

INSERT INTO `sales` (`id`, `reporter`, `distributor`, `g_amount`, `sack_no_NF`, `sack_no_IF`, `sack_no_IS`, `sack_no_MA`, `ifunguro`, `isezerano`, `magaju`, `new_food`, `envelope`, `comment`, `date`) VALUES
('svo7up', 'Bosco', 'Thierry', 3295000, 12, 13, 0, 0, '{\"weights\":{\"5\":80,\"10\":50,\"25\":40},\"pricings\":{\"5\":3500,\"10\":7500,\"25\":18000},\"totals\":{\"5\":280000,\"10\":375000,\"25\":720000}}', '{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":null,\"10\":null,\"25\":null},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":null,\"10\":null,\"25\":null},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"weights\":{\"5\":80,\"10\":100,\"25\":40},\"pricings\":{\"5\":4000,\"10\":8000,\"25\":20000},\"totals\":{\"5\":320000,\"10\":800000,\"25\":800000}}', '{\"weights\":{\"2\":0},\"pricings\":{\"2\":0},\"totals\":{\"2\":0}}', 'Agiye Kanombe', '2024-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sales_n_returns`
--

CREATE TABLE `sales_n_returns` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(1000) NOT NULL,
  `distributor` varchar(255) NOT NULL,
  `loc` varchar(255) NOT NULL,
  `pm` varchar(255) NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `p_sold` varchar(1000) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales_n_returns`
--

INSERT INTO `sales_n_returns` (`id`, `reporter`, `distributor`, `loc`, `pm`, `p_name`, `p_sold`, `comment`, `date`) VALUES
('463e80', 'Thierry', 'Thierry', 'Kanombe', 'cash', 'Denis', '{\"NF\":{\"weights\":{\"5\":40,\"10\":50,\"25\":20},\"pricings\":{\"5\":4000,\"10\":8000,\"25\":20000},\"totals\":{\"5\":160000,\"10\":400000,\"25\":400000}},\"IS\":{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}},\"IF\":{\"weights\":{\"5\":40,\"10\":25,\"25\":20},\"pricings\":{\"5\":3500,\"10\":7500,\"25\":18000},\"totals\":{\"5\":140000,\"10\":187500,\"25\":360000}},\"MA\":{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}},\"envelope\":{\"weights\":{\"2\":0},\"pricings\":{\"2\":0},\"totals\":{\"2\":0}}}', 'ok', '2024-12-12 15:29:00');

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
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales_track`
--

INSERT INTO `sales_track` (`id`, `weights`, `act_type`, `destination`, `totals`, `date`) VALUES
('463e80', '{\"NF\":1200,\"IS\":0,\"MA\":0,\"IF\":950,\"envelope\":0}', 'add', 'sales', '{\"nf\":1200,\"is\":0,\"ma\":0,\"if\":950,\"envelope\":0}', '2024-12-12 15:29:00');

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
('64305z', 'Denis', 'RAC200C', 15000, '12', 'ok', 400, 600000, 500000, 100000, 'Bosco', 'ok', '2024-12-12 14:58:19'),
('img1bt', 'Denis', 'RAC200C', 10000, '12', 'ok', 400, 4000000, 3000000, 1000000, 'Bosco', 'ok', '2024-12-12 15:04:01'),
('kx485i', 'nyamanswa', 'rah008d', 1000, '199', '192', 100000, 120000, 1200000, 1000, 'ert', 'ertyre', '2024-12-12 17:46:59'),
('o40a92', 'nyamanswa', 'rah008d', 1000, '199', '192', 20, 20000, 1200000, 3000, '200', '660', '2024-12-12 18:59:50');

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
('64305z', 'add', 15000, 'stock1', 15000, '2024-12-12 14:58:19'),
('e16988', 'minus', -10000, 'preparation', 15000, '2024-12-12 15:05:56'),
('img1bt', 'add', 10000, 'stock1', 25000, '2024-12-12 15:04:01'),
('kx485i', 'add', 1000, 'stock1', 16000, '2024-12-12 17:46:59'),
('o40a92', 'add', 1000, 'stock1', 17000, '2024-12-12 18:59:50');

-- --------------------------------------------------------

--
-- Table structure for table `stock_track`
--

CREATE TABLE `stock_track` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `sack_no` varchar(255) NOT NULL,
  `ifunguro` varchar(1000) NOT NULL,
  `isezerano` varchar(1000) NOT NULL,
  `magaju` varchar(1000) NOT NULL,
  `new_food` varchar(1000) NOT NULL,
  `envelope` varchar(1000) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
('1', 'WORKER', 'hirwajeermie@gmail.com', 'WORKER', '$2b$10$URq4tLusp2/i60KOa8Xk6ei7.6idy8Trg3F/1zadSe4RcFr17xzqq', NULL, '2024-11-06 16:43:38'),
('E15JV9y', 'TYCOON', 'newgoodltd12@gmail.com', 'BOSS', '$2b$10$XAS88zWGLdyk9RUfIzaXUurBp70vaD4QADy1c8g6o.isR8nk.kpzG', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiRTE1SlY5eSIsInJvbGUiOiJCT1NTIiwiaWF0IjoxNzMzNzYxOTAzLCJleHAiOjE3MzM3NjI1MDN9.ILK0tQOZtufPvhsXTGbZM3MQsiipFWQlNP9yRH67XuQ', '2024-11-06 19:34:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `debts`
--
ALTER TABLE `debts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leftovers`
--
ALTER TABLE `leftovers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leftover_out`
--
ALTER TABLE `leftover_out`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mr`
--
ALTER TABLE `mr`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `p_debts`
--
ALTER TABLE `p_debts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `returns`
--
ALTER TABLE `returns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sacks`
--
ALTER TABLE `sacks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sacks_track`
--
ALTER TABLE `sacks_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_n_returns`
--
ALTER TABLE `sales_n_returns`
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
-- Indexes for table `stock_track`
--
ALTER TABLE `stock_track`
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
