import {useState} from "react";
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import 'styles/_nav.scss';
import Content from "./Content";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

export const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const drawerHandler = () => {
        setOpen(!open);
    };


    interface IMenu {
        name: string,
        url: string,
        isOpen?: boolean,
        icon?: JSX.Element,
        sub?: IMenu[]
    }

    const [menuInfo, setMenuInfo] = useState<IMenu[]>(
        [
            {
                name: "시스템 관리",
                url: "/system",
                isOpen: false,
                icon: <SettingsSuggestIcon/>,
                sub: [
                    {
                        name: "관리자 계정",
                        url: "/account",
                    },
                    {
                        name: "온보딩",
                        url: "/onboarding",
                    },
                    {
                        name: "온보딩 텍스트 변경 함수",
                        url: "/onboarding-text-change",
                    },
                    {
                        name: "공지사항",
                        url: "/notice",
                    },
                    {
                        name: "금칙어",
                        url: "/banned-word",
                    },
                    {
                        name: "앱 환경설정",
                        url: "/app-config",
                    }
                ]
            },
            {
                name: "관리",
                url: "/basic",
                isOpen: false,
                sub: [
                    {
                        name: "카테고리 관리",
                        url: "/category"
                    },
                    {
                        name: "종 관리",
                        url: "/type"
                    },
                    {
                        name: "반려동물 성격 분류 관리",
                        url: "/character-class"
                    },
                    {
                        name: "반려동물 성격 분류 결과 관리",
                        url: "/character-class-result"
                    },
                    {
                        name: "반려동물 성격 타입 관리",
                        url: "/character-class-type"
                    },
                    {
                        name: "관계 설명 관리",
                        url: "/relation-description"
                    },
                    {
                        name: "관계 타입 관리",
                        url: "/relation-type"
                    }
                ]
            },
            {
                name: "스토리 관리",
                url: "/story",
                isOpen: false,
                sub: [
                    {
                        name: "스토리",
                        url: "/stories"
                    },
                    {
                        name: "스토리 댓글",
                        url: "/comments"
                    },
                ]
            },
            {
                name: "레이아웃 관리",
                url: "/layout",
                isOpen: false,
                sub: [
                    {
                        name: "레이아웃",
                        url: "/layouts"
                    },
                    {
                        name: "레이아웃 백그라운드 색상",
                        url: "/background"
                    },
                    {
                        name: "레이아웃 카테고리",
                        url: "/category"
                    },
                    {
                        name: "레이아웃 폰트",
                        url: "/font"
                    },
                    {
                        name: "레이아웃 텍스트 색상",
                        url: "/text-color"
                    },
                ]
            },
            {
                name: "로그 관리",
                url: "/log",
                isOpen: false,
                sub: [
                    {
                        name: "이메일",
                        url: "/email"
                    },
                    {
                        name: "문자",
                        url: "/sms"
                    },
                    {
                        name: "스토리 알림 로그",
                        url: "/notification-log"
                    }
                ]
            },
            {
                name: "사용자 관리",
                url: "/user",
                isOpen: false,
                sub: [
                    {
                        name: "유저 관리",
                        url: "/user"
                    },
                    {
                        name: "유저 관리",
                        url: "/user"
                    },
                    {
                        name: "유저 관리",
                        url: "/user"
                    },
                ]
            }
        ])

    const menuHandler = (name: string, isOpen: boolean | undefined) => {
        setMenuInfo(menuInfo.map((menu) =>
                menu.name === name
                    ? {...menu, isOpen: !isOpen}
                    : menu
            )
        )
    }

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar style={{
                    // background: 'rgba(237,112,95,1)'
                    background: '#ff6657'
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={drawerHandler}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h4" noWrap component="div"
                                style={{
                                    marginLeft: "0.4em",
                                    color: 'white',
                                    fontWeight: "bold"
                                }}>
                        스몰스 관리자
                    </Typography>

                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={drawerHandler}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    {menuInfo.map((menu, index) => (
                        <ListItem
                            key={index} disablePadding sx={{display: 'block'}}
                            // button component={Link} to={menu.url}
                        >
                            <div onClick={() => menuHandler(menu.name, menu.isOpen)}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {menu.icon ? menu.icon : <MailIcon/>}
                                    </ListItemIcon>
                                    <ListItemText primary={menu.name} sx={{opacity: open ? 1 : 0}}/>
                                </ListItemButton>
                            </div>
                            {
                                menu.isOpen && menu.sub
                                    ?
                                    <List sx={{paddingTop: 0}}>
                                        {(menu.sub).map((sub, subId) => (
                                            <ListItem key={subId}
                                                      sx={{
                                                          paddingLeft: '0.5em',
                                                          paddingTop: 0,
                                                          paddingBottom: 0,
                                                          paddingRight: 0
                                                      }}>
                                                {/*{sub.name}*/}
                                                <ListItemButton
                                                    sx={{
                                                        minHeight: 36,
                                                        justifyContent: open ? 'initial' : 'center',
                                                        px: 2.5,
                                                        paddingTop: 0,
                                                        paddingBottom: 0,

                                                    }}
                                                >
                                                    <ListItemIcon
                                                        sx={{
                                                            minWidth: 0,
                                                            mr: open ? 3 : 'auto',
                                                            justifyContent: 'center',
                                                            marginRight: open ? '1em' : 0

                                                        }}
                                                    >
                                                        <SubdirectoryArrowRightIcon/>
                                                        {/*{subId % 2 === 0 ? <InboxIcon/> : <MailIcon/>}*/}
                                                    </ListItemIcon>
                                                    <ListItemText disableTypography primary={sub.name}
                                                                  sx={{
                                                                      opacity: open ? 1 : 0,
                                                                      fontSize: '0.8em'
                                                                  }}/>
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                    : null
                            }
                        </ListItem>
                    ))}
                </List>
                <Divider/>
            </Drawer>

            <Content/>
        </Box>
    );
}
